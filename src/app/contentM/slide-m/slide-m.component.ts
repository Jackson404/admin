import {Component, OnInit} from '@angular/core';
import {SlideMService} from '../../service/slideM/slide-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {ConfigService} from '../../config/config.service';

@Component({
  selector: 'app-slide-m',
  templateUrl: './slide-m.component.html',
  styleUrls: ['./slide-m.component.css']
})
export class SlideMComponent implements OnInit {

  serverName: any;
  listOfData: any;
  selectedSlideId: any;


  constructor(
    public slideMService: SlideMService,
    private msg: NzMessageService,
    private router: Router,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    this.getAllAdsAndSlide();
    this.serverName = this.config.baseUrl;
  }

  getAdsOrSlide($event): void {
    this.getAllAdsAndSlide($event);
  }


  getAllAdsAndSlide(type = 0): void {
    this.slideMService.getAll(type).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  //删除轮播图
  delSlide(slideId): void {
    this.slideMService.delSlide(slideId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('删除成功');
          this.router.navigateByUrl('/home/slideM');
          // this.getAllSlide();
          this.getAllAdsAndSlide();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
