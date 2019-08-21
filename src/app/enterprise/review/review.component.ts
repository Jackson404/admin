import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../../service/review/review.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  listOfData: any = [];

  constructor(
    private reviewService: ReviewService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getListPage();
  }

  getListPage(): void {
    this.reviewService.getListPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  review(certId, pass): void {
    this.reviewService.review(certId, pass).subscribe(
      res => {
        console.log(res);
        if (res.errorCode == 0) {
          this.getListPage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
