import {Component, OnInit} from '@angular/core';
import {PositionMService} from '../../service/positionM/position-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-position-m',
  templateUrl: './position-m.component.html',
  styleUrls: ['./position-m.component.css']
})
export class PositionMComponent implements OnInit {

  positionId:any;
  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  listOfDataA: any;
  pageIndexA: any = 1;
  pageSizeA: any = 10;
  pageTotalA: any;

  // 弹出框
  isVisible = false;

  // 弹出框结束

  constructor(
    public positionMService: PositionMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
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


  getByPage(): void {
    this.positionMService.getByPage(this.pageIndex, this.pageSize).subscribe(
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

  getResumePageByPositionId(): void {
    this.positionMService.getResumePageByPositionId(this.positionId,this.pageIndex, this.pageSize).subscribe(
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

  // 删除职位
  delPosition(positionId): void {
    this.positionMService.delPosition(positionId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('删除成功');
          this.getByPage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }
}
