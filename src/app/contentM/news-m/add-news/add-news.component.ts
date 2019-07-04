import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {NewsMService} from '../../../service/newsM/news-m.service';
import {Router} from '@angular/router';
import {ConfigService} from '../../../config/config.service';


@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],

})
export class AddNewsComponent implements OnInit {

  newsCateList: any;
  newsCateValue: any;
  newsTitle: any;
  keywords: any;
  newsDes: any;
  newsContent: any;
  newsFrom: any;
  isShow: any;
  imgUrl: any;

  // upload 缩略图
  uploadServeName: any;
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
    'zIndex': 0
  };

  constructor(
    public newsService: NewsMService,
    public msg: NzMessageService,
    public router: Router,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    this.getNewsCateList();
    const accessToken = window.localStorage.getItem('accessToken');
    this.uploadServeName = this.config.baseUrl + '/public/index.php/api/v1.File/upload?accessToken=' + accessToken;
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
        }
      },
      err => {
        this.msg.error('服务出现异常');
      }
    );
  }

  addNews(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.newsService.addNews(this.newsCateValue, this.newsTitle, this.keywords, this.newsDes, this.newsContent, this.imgUrl, this.isShow, idToken).subscribe(
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
