import {Component, OnInit} from '@angular/core';
import {PositionMService} from '../../service/positionM/position-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-position-m',
  templateUrl: './position-m.component.html',
  styleUrls: ['./position-m.component.css']
})
export class PositionMComponent implements OnInit {

  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  constructor(
    public positionMService: PositionMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }

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

  // 删除职位
  delPosition(positionId): void {
    const idToken = window.localStorage.getItem('idToken');
    this.positionMService.delPosition(positionId, idToken).subscribe(
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
