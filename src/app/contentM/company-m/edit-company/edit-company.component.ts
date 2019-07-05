import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  companyId: any;
  name: any;
  province: any;
  city: any;
  area: any;
  address: any;
  phone: any;
  nature: any;
  profile: any;
  remark: any;
  contact: any;
  wxNumber: any;
  leader: any;

  // ueditor 配置
  neditorConfig = {
    'autoClearinitialContent': true,
    'initialFrameWidth': '100%',
    'initialFrameHeight': '300',
    'autoHeightEnabled': false,
    'zIndex': 0

  };

  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.companyId = params.companyId;
        this.getCompanyDetail();
      }
    );
  }

  getCompanyDetail(): void {
    this.companyService.getCompanyDetail(this.companyId).subscribe(
      res => {
        if (res.errorCode == 0) {
          const detail = res.data.detail;
          this.name = detail.name;
          this.province = detail.province;
          this.city = detail.city;
          this.area = detail.area;
          this.address = detail.address;
          this.phone = detail.phone;
          this.nature = detail.nature;
          this.profile = detail.profile;
          this.remark = detail.remark;
          this.contact = detail.contact;
          this.wxNumber = detail.wxNumber;
          this.leader = detail.leader;

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.warning('服务异常');
      }
    );
  }

  // 编辑公司
  editCompany(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.companyService.editCompany(this.companyId, this.name, this.province, this.city, this.area, this.address, this.phone, this.nature, this.profile,
      this.remark, this.contact, this.wxNumber, this.leader, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.router.navigateByUrl('/home/companyM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
