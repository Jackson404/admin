import {Component, OnInit} from '@angular/core';
import {CompanyMService} from '../../service/companyM/company-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-m',
  templateUrl: './company-m.component.html',
  styleUrls: ['./company-m.component.css']
})
export class CompanyMComponent implements OnInit {

  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  constructor(
    public companyMService: CompanyMService,
    private  msg: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getByPage();
  }

  getByPage(): void {
    this.companyMService.getByPage(this.pageIndex, this.pageSize).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page.data;
          this.pageTotal = res.data.page.total;
        }
      }, err => {
        this.msg.error('服务器异常');
      }
    );
  }

  delCompany(companyId): void {
    const idToken = window.localStorage.getItem('idToken');
    this.companyMService.delCompany(companyId, idToken).subscribe(
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
