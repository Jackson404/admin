import {Component, OnInit} from '@angular/core';
import {ResumeMService} from '../../service/resumeM/resume-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-resume-m',
  templateUrl: './resume-m.component.html',
  styleUrls: ['./resume-m.component.css']
})
export class ResumeMComponent implements OnInit {

  resumeId: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;
  listOfData: any;

  listOfDataA:any;
  pageIndexA: any = 1;
  pageSizeA: any = 10;
  pageTotalA: any;
  // 弹出框
  isVisible = false;

  // 弹出框结束

  constructor(
    private resumeService: ResumeMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }

  // modal start
  showApplyModal(resumeId): void {
    this.isVisible = true;
    this.resumeId = resumeId;
    this.getResumeApplyPage();
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // modal end


  getByPage(): void {
    this.resumeService.getByPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        }
      },
      err => {
        this.msg.error('服务异常');
      }
    );
  }

  getResumeApplyPage(): void {
    this.resumeService.getResumeApplyPage(this.resumeId,this.pageIndexA,this.pageSizeA).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfDataA = res.data.page.data;
          this.pageTotalA = res.data.page.total;

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
