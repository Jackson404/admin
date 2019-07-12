import {Component, OnInit} from '@angular/core';
import {CompanyMService} from '../../service/companyM/company-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {AreaService} from '../../service/area/area.service';
import {IndustryService} from '../../service/industry/industry.service';

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

  pageIndexA: any = 1;
  pageSizeA: any = 10;
  pageTotalA: any;

  show:any = 'normal';

  areaInfo: any = '';
  industryInfo: any = '';

  areaInfoData: any = [];
  industryInfoData: any = [];

  constructor(
    public companyMService: CompanyMService,
    private  msg: NzMessageService,
    private router: Router,
    private areaService: AreaService,
    private industryService: IndustryService
  ) {
  }

  ngOnInit() {
    this.getByPage();
    this.filterAreaInfo();
    this.filterIndustryInfo();
  }

  areaInfoChange($event): void {
    this.areaInfo = $event;
    this.filterAreaInfo();
    this.filterCompany();
  }

  industryInfoChange($event): void {
    this.industryInfo = $event;
    this.filterIndustryInfo();
    this.filterCompany();
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

  filterAreaInfo(): void {
    this.areaService.filterAreaInfo(this.areaInfo).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.areaInfoData = res.data;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  filterIndustryInfo(): void {
    this.industryService.filterIndustryInfo(this.industryInfo).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.industryInfoData = res.data;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  filterCompany(): void {
    this.companyMService.filterCompanyInfo(this.areaInfo, this.industryInfo,this.pageIndexA, this.pageSizeA).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.page;
          this.pageTotalA = res.data.total;
          this.show = 'filter';
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }



}
