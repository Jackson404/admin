import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {SlideMService} from '../../../service/slideM/slide-m.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../../../config/config.service';

@Component({
  selector: 'app-edit-slide',
  templateUrl: './edit-slide.component.html',
  styleUrls: ['./edit-slide.component.css']
})
export class EditSlideComponent implements OnInit {

  slideId: any;
  remark: any = '';
  turnUrl: any = '';
  imgUrl: any = '';
  type:any;

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

  constructor(
    public slideService: SlideMService,
    public msg: NzMessageService,
    public router: Router,
    private config: ConfigService,
    private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(
      params => {
        this.slideId = params.slideId;
        this.getDetail();
      }
    );
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

  getDetail(): void {
    this.slideService.getDetail(this.slideId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.imgUrl = res.data.detail.imgUrl;
          this.remark = res.data.detail.remark;
          this.turnUrl = res.data.detail.turnUrl;
          this.type = res.data.detail.type;

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  edit(): void {

    const idToken = window.localStorage.getItem('idToken');
    this.slideService.editSlide(this.slideId, this.imgUrl, this.remark, this.turnUrl, this.type,idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.router.navigateByUrl('/home/slideM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }
}
