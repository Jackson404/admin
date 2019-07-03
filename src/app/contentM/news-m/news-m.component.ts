import {Component, OnInit} from '@angular/core';
import {NewsMService} from '../../service/newsM/news-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-news-m',
  templateUrl: './news-m.component.html',
  styleUrls: ['./news-m.component.css']
})
export class NewsMComponent implements OnInit {

  listOfData: any = {};
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  constructor(
    public NewMService: NewsMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }


  // 获取开药列表
  getByPage(): void {
    this.NewMService.getByPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page;

          this.pageTotal = this.listOfData.total;
        } else {
          this.msg.error(res.errorCode + res.msg);
        }
      },
      err => {
        this.msg.error('服务异常');
      }
    );
  }

  // 删除新闻
  delNews(newsId): void {

    const idToken = window.localStorage.getItem('idToken');
    this.NewMService.delNews(newsId, idToken).subscribe(
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
