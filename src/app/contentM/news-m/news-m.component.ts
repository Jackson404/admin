import {Component, OnInit} from '@angular/core';
import {NewsMService} from '../../service/newsM/news-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ConfigService} from '../../config/config.service';

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
  showPagination:any = 'normal';

  serveUrl: any;

  selectedNewsCateId: any ;
  newsCateList: any;
  pageIndexS: any = 1;
  pageSizeS: any = 10;
  pageTotalS: any;

  constructor(
    public NewMService: NewsMService,
    private msg: NzMessageService,
    private config: ConfigService
  ) {
  }

  ngOnInit() {
    this.serveUrl = this.config.baseUrl;
    this.getByPage();
    this.getAllNewsCate();
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
    this.NewMService.delNews(newsId).subscribe(
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

  // 获取所有新闻分类
  getAllNewsCate(): void {
    this.NewMService.getNewsCategoryList().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.newsCateList = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getPageByCateIdAdmin():void{
    this.NewMService.getPageByCateIdAdmin(this.selectedNewsCateId, this.pageIndexS, this.pageSizeS).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page;
          this.pageTotalS = this.listOfData.total;
          this.showPagination = 'filter';
        } else {
          this.msg.error(res.errorCode + res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getNewsByCateId($event) {
    this.selectedNewsCateId = $event;
    this.getPageByCateIdAdmin();
  }


}
