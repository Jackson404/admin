import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {NewsMService} from '../../../service/newsM/news-m.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../config/config.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  newsId: any;
  categoryId: any;
  isShowName: any;
  isShowValue: any;
  newsCateName: any;
  uploadServeName: any;

  // newsDetail: any;

  newsCateList: any;
  newsCateValue: any;
  newsTitle: any;
  keywords: any;
  newsDes: any;
  newsContent: any;
  isShow: any = 1;
  imgUrl: any;


  // upload 缩略图
  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };
  fileList: any = [];
  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };
  // upload --


  // ueditor 配置
  neditorConfig = {
    'autoClearinitialContent': true,
    'initialFrameWidth': '100%',
    'initialFrameHeight': '300',
    'autoHeightEnabled': false,
    'zIndex': 0,
    'tabNode':'&nbsp;'

  };

  constructor(
    public newsService: NewsMService,
    public msg: NzMessageService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    const accessToken = window.localStorage.getItem('accessToken');
    const idToken = window.localStorage.getItem('idToken');
    this.uploadServeName = this.config.baseUrl + '/public/index.php/api/v1.admin.File/upload?accessToken=' + accessToken+
      '&id_token='+idToken;
    this.getNewsCateList();
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.newsId = params.newsId;
        this.getNewsDetail();
      }
    );
  }


  // upload 缩略图上传
  uploadChange($event): void {
    if ($event.type == 'success') {
      this.fileList = $event.fileList;
      const result = $event.file.response;
      if (result.errorCode == '0') {
        this.msg.success('上传成功');
        this.imgUrl = result.data.imgUrl;
      } else {
        this.msg.warning(result.msg);
      }
    }
  }

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
          this.newsCateName = newsDetail.categoryName;
          this.categoryId = newsDetail.categoryId;
          this.newsTitle = newsDetail.title;
          this.keywords = newsDetail.keywords;
          this.newsDes = newsDetail.description;
          this.newsContent = newsDetail.content;
          this.imgUrl = newsDetail.imgUrl;
          this.isShowValue = newsDetail.isShow;

          if (newsDetail.isShow == 0) {
            this.isShowName = '不展示';
          } else {
            this.isShowName = '展示';
          }
        } else {
          this.msg.warning(res.msg);
        }
      },
      err => {
        this.msg.error('服务出现异常');
      }
    );
  }

  //编辑新闻
  editNews(): void {
    if (this.newsCateValue == undefined) {
      this.newsCateValue = this.categoryId;
    }

    if (this.isShow == undefined) {
      this.isShow = this.isShowValue;
    }

    this.newsService.editNews(this.newsId, this.newsCateValue, this.newsTitle, this.keywords, this.newsDes, this.newsContent, this.imgUrl, this.isShow).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.router.navigateByUrl('/home/newsM')

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
