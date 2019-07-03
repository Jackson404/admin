import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {ActivatedRoute} from '@angular/router';

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

  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private activatedRouter: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(
      params => {
        console.log(params);
        const companyId = params.companyId;
        const idToken = window.localStorage.getItem('idToken');
        this.companyService.getPositionPageByCompanyId(companyId, this.pageIndex, this.pageSize, idToken).subscribe(
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
    );
  }

  getByPage(): void {

  }
}
