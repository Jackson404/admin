import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {SlideMService} from '../../../service/slideM/slide-m.service';
import {ConfigService} from '../../../config/config.service';

@Component({
  selector: 'app-add-slide',
  templateUrl: './add-slide.component.html',
  styleUrls: ['./add-slide.component.css']
})
export class AddSlideComponent implements OnInit {

  remark: any = '';
  turnUrl: any = '';
  imgUrl:any = '';
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
    private config:ConfigService
  ) {
  }

  ngOnInit() {
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


  addSlide(): void {
    this.slideService.addSlide(this.imgUrl, this.remark, this.turnUrl,this.type).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
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
