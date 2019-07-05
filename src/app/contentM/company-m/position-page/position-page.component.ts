import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {ActivatedRoute} from '@angular/router';
import {PositionMService} from '../../../service/positionM/position-m.service';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit {
  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;
  companyId:any;
// 弹出框
  isVisible = false;
  positionId: any;
  listOfDataA: any;
  pageIndexA: any = 1;
  pageSizeA: any = 10;
  pageTotalA: any;

  // 弹出框结束
  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private activatedRouter: ActivatedRoute,
    private positionMService: PositionMService
  ) {
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(
      params => {
        // console.log(params);
        this.companyId = params.companyId;
        this.getPositionPageByCompanyId();
      }
    );
  }

  getPositionPageByCompanyId():void{
    const idToken = window.localStorage.getItem('idToken');
    this.companyService.getPositionPageByCompanyId(this.companyId, this.pageIndex, this.pageSize, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        } else {
          this.msg.warning(res.msg);
        }
      },
      err => {
        this.msg.error('服务器异常');
      }
    );
  }

  // modal start
  showResumeModal(positionId): void {
    this.isVisible = true;
    this.positionId = positionId;
    this.getResumePageByPositionId();

  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // modal end


  // 删除职位
  delPosition(positionId): void {
    const idToken = window.localStorage.getItem('idToken');
    this.positionMService.delPosition(positionId, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('删除成功');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getResumePageByPositionId(): void {
    this.positionMService.getResumePageByPositionId(this.positionId, this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfDataA = res.data.page.data;
          this.pageTotalA = res.data.page.total;
        } else {
          this.msg.warning(res.msg);
        }
      },
      err => {
        this.msg.error('服务器异常');
      }
    );
  }

}
