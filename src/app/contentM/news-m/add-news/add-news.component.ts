import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {UploadFile} from 'ng-zorro-antd';
import {UploadService} from '../../../service/upload.service';
import {NewsMService} from '../../../service/newsM/news-m.service';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],

})
export class AddNewsComponent implements OnInit {

  public newsCateList: any;
  public newsCateValue: any;
  public newsTitle: any;
  public keywords: any;
  public newsDes: any;
  public newsContent: any;
  public newsFrom: any;
  public isShow: any;


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


  constructor(
    public newsService: NewsMService,
    public uploadService: UploadService,
    public msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getNewsCateList();
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
        }
      },
      err => {
        this.msg.error('服务出现异常');
      }
    );
  }

  addNews(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.newsService.addNews(this.newsCateValue, this.newsTitle, this.keywords, this.newsDes, this.newsContent, this.imgUrl, idToken).subscribe(
      res => {
        console.log(res);
      }
    );

  }


}
