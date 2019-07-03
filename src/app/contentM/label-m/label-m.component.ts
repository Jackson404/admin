import {Component, OnInit} from '@angular/core';
import {LabelMService} from '../../service/labelM/label-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-label-m',
  templateUrl: './label-m.component.html',
  styleUrls: ['./label-m.component.css']
})
export class LabelMComponent implements OnInit {

  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  constructor(
    public labelMService: LabelMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }

  getByPage(): void {
    this.labelMService.getByPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  delLabel(labelId): void {
    const idToken = window.localStorage.getItem('idToken');
    this.labelMService.delLabel(labelId, idToken).subscribe(
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
