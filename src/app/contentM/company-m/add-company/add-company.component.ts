import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

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
    'initialContent': '请输入内容',
    'autoClearinitialContent': true,
    'initialFrameWidth': 800,
    'initialFrameHeight': 300,

  };

  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  addCompany(): void {

    const idToken = window.localStorage.getItem('idToken');
    this.companyService.addCompany(this.name, this.province, this.city, this.area, this.address, this.phone, this.nature, this.profile,
      this.remark, this.contact, this.wxNumber, this.leader, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
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
