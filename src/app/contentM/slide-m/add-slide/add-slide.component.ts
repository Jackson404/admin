import {Component, OnInit} from '@angular/core';
import {NzMessageService, UploadFile} from 'ng-zorro-antd';
import {UploadService} from '../../../service/upload.service';
import {Router} from '@angular/router';
import {SlideMService} from '../../../service/slideM/slide-m.service';

@Component({
  selector: 'app-add-slide',
  templateUrl: './add-slide.component.html',
  styleUrls: ['./add-slide.component.css']
})
export class AddSlideComponent implements OnInit {

  remark: any = '';
  turnUrl: any = '';

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
    public slideService: SlideMService,
    public uploadService: UploadService,
    public msg: NzMessageService,
    public router: Router,
  ) {
  }

  ngOnInit() {
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

  addSlide(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.slideService.addSlide(this.imgUrl, this.remark, this.turnUrl, idToken).subscribe(
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
