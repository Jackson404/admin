import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../../service/review/review.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  pageIndexEm: any = 1;
  pageSizeEm: any = 10;
  pageTotalEm: any;

  listOfData: any;
  emListOfData: any;
  isVisibleEm = false;
  isVisibleAddEp = false;
  isVisibleAddEm = false;

  realname: any;
  realphone: any;
  companyName: any;
  companyAddr: any;

  constructor(
    private reviewService: ReviewService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getEpUserPage();
  }

  showEmUser(epId) {
    this.isVisibleEm = true;
    this.reviewService.getEmUserPageByEpId(epId, this.pageIndexEm, this.pageSizeEm).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.emListOfData = res.data.page.data;
          this.pageTotalEm = res.data.page.total;
        } else {
          this.msg.warning(res.msg);
        }

      }, err => {
        this.msg.error('服务异常');
      }
    );

  }

  handleCancelEm() {
    this.isVisibleEm = false;
  }

  handleOkEm() {
    this.isVisibleEm = false;
  }

  addEpUser() {
    this.isVisibleAddEp = true;
  }

  handleCancelAddEp() {
    this.isVisibleAddEp = false;
  }

  handleOkAddEp() {
    this.isVisibleAddEp = false;
    this.reviewService.addEpUser(this.realname, this.realphone, this.companyName, this.companyAddr).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success(res.msg);
          this.getEpUserPage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getEpUserPage(): void {
    this.reviewService.getEpUserPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          // console.log(res);
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        } else {
          this.msg.warning(res.msg);
        }
      }, error => {
        this.msg.error('服务异常');
      }
    );
  }

  showAddEmUser(companyName) {
    this.isVisibleAddEm = true;
    this.companyName = companyName;
  }

  handleCancelAddEm() {
    this.isVisibleAddEm = false;
  }

  handleOkAddEm() {
    this.isVisibleAddEm = false;
    this.reviewService.addEmUser(this.companyName, this.realname, this.realphone).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success(res.msg);
          this.getEpUserPage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
