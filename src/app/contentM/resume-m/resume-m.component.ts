import {Component, OnInit} from '@angular/core';
import {ResumeMService} from "../../service/resumeM/resume-m.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-resume-m',
  templateUrl: './resume-m.component.html',
  styleUrls: ['./resume-m.component.css']
})
export class ResumeMComponent implements OnInit {

  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;
  listOfData: any;

  constructor(
    private resumeService: ResumeMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }

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
    )
  }

}
