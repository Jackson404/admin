import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {NewsMService} from '../../../service/newsM/news-m.service';
import {UploadService} from '../../../service/upload.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  newsId: any;
  newsDetail: any;

  newsCateList: any;
  newsCateValue: any;
  newsTitle: any;
  keywords: any;
  newsDes: any;
  newsContent: any;
  newsFrom: any;
  isShow: any;


  // upload 缩略图
  fileList: UploadFile[];
  file = {};
  imgUrl: any;
  imgNzDisabled = false;

  uploadFileName = '';

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  previewImage: string | undefined = '';
  previewVisible = false;

  // upload --

  // ueditor 配置
  neditorConfig = {
    'initialContent': '请输入内容',
    'autoClearinitialContent': true,
    'initialFrameWidth': 800,
    'initialFrameHeight': 300,

  };

  constructor(
    public newsService: NewsMService,
    public uploadService: UploadService,
    public msg: NzMessageService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getNewsCateList();
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.newsId = params.newsId;
      }
    );
    this.getNewsDetail();
  }

  // upload 缩略图上传

  handleUpload = (item: any) => {

    const formData = new FormData();
    formData.append(item.name, item.file as any, this.uploadFileName);

    this.uploadService.uploadFormData(formData).subscribe(
      res => {
        if (res.errorCode == 0) {
          item.onSuccess(item.file);
          this.msg.success('图片上传成功');
          // console.log(res);
          this.imgNzDisabled = true;
          this.imgUrl = res.data.imgUrl;
        }
      },
      err => {
        this.msg.error(err, item.file);
      }
    );
  };


  beforeUpload = (file: UploadFile): boolean => {
    this.uploadFileName = file.name;
    return true;
  };


  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  // upload --

  //获取新闻分类列表
  getNewsCateList(): void {
    this.newsService.getNewsCategoryList().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.newsCateList = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      },
      err => {
        this.msg.error('服务出现异常');
      }
    );
  }

  //获取新闻详情
  getNewsDetail(): void {
    this.newsService.getNewsDetail(this.newsId).subscribe(
      res => {
        if (res.errorCode == 0) {
          const newsDetail = res.data.detail;
          this.newsCateValue = newsDetail.categoryId;
          this.newsTitle = newsDetail.title;
          this.keywords = newsDetail.keywords;
          this.newsDes = newsDetail.description;
          this.newsContent = newsDetail.content;
          this.imgUrl = newsDetail.imgUrl;
        } else {
          this.msg.warning(res.msg);
        }
      },
      err => {
        this.msg.error('服务出现异常');
      }
    );
  }

  addNews(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.newsService.addNews(this.newsCateValue, this.newsTitle, this.keywords, this.newsDes, this.newsContent, this.imgUrl,this.isShow, idToken).subscribe(
      res => {
        // console.log(res);
        // @ts-ignore
        if (res.errorCode == 0) {
          this.msg.success('添加新闻成功');
          this.router.navigateByUrl('/home/newsM');
        } else {
          // @ts-ignore
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );

  }

}
