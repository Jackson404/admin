import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {Router} from '@angular/router';
import {AreaService} from '../../../service/area/area.service';
import {positionCate} from '../../../mockData/positionCate';
import {variable} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  name: any = '';
  province: any;
  city: any;
  area: any;
  address: any = '';
  phone: any = '';
  nature: any = '';
  profile: any = '';
  remark: any = '';
  contact: any = '';
  wxNumber: any = '';
  leader: any = '';
  industryId: any;

  // ueditor 配置
  neditorConfig = {
    'autoClearinitialContent': true,
    'initialFrameWidth': '100%',
    'initialFrameHeight': '300',
    'autoHeightEnabled': false,
    'zIndex': 0

  };

  // 省市区选择
  provinceData: any;
  cityData: any;
  areaData: any;

  // 行业分类
  positionCateData: any = positionCate;
  values: any[] | null = null;


  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private router: Router,
    private areaService: AreaService
  ) {
  }

  ngOnInit() {
    this.getProvince();

  }

  onChanges(values: any): void {
    console.log(this.values);
    console.log(values);
    const len = values.length;
    this.industryId = values[len - 1];
    console.log(values[len - 1]);
    console.log(this.industryId);
  }

  provinceChange(value: string): void {
    this.city = undefined;
    this.area = undefined;
    this.areaService.getCity(value).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.cityData = res.data.city;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  cityChange(value: string): void {
    this.area = undefined;
    this.areaService.getArea(value).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.areaData = res.data.area;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  getProvince(): void {
    this.areaService.getProvince().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.provinceData = res.data.province;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  addCompany(): void {

    if (this.province == undefined) {
      this.province = '';
    }
    if (this.city == undefined) {
      this.city = '';
    }
    if (this.area == undefined) {
      this.area = '';
    }

    console.log(this.industryId);
    this.companyService.addCompany(this.industryId, this.name, this.province, this.city, this.area, this.address, this.phone, this.nature, this.profile,
      this.remark, this.contact, this.wxNumber, this.leader).subscribe(
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
