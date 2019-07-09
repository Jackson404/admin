import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../../service/dataM/resume.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  // widthConfig = [
  //   50,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  //   100,
  // ];

  constructor(
    private resumeService: ResumeService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    // this.getCount();
    this.getByPage();
  }

  getCount(): void {
    this.resumeService.getCount().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.pageTotal = res.data.total;
          // window.localStorage.setItem('pageTotal',res.data.total);
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getByPage(): void {
    this.resumeService.getByPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page;
          // this.pageTotal = window.localStorage.getItem('pageTotal');
          this.pageTotal = res.data.total;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务器异常');
      }
    );
  }

  delResume(resumeId): void {
    const idToken = window.localStorage.getItem('idToken');
    this.resumeService.delResume(resumeId,idToken).subscribe(
      res => {
        if (res.errorCode == 0){
          this.msg.success('删除成功');
          this.getByPage();
        }
      },err=>{
        this.msg.error('服务异常');
      }
    );
  }



}
