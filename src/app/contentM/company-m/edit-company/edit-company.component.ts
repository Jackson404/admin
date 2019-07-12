import {Component, OnInit} from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AreaService} from '../../../service/area/area.service';
import {IndustryService} from '../../../service/industry/industry.service';

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

  industryId:any;

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
  nodes: any = [];

  onChange($event): void {
    this.industryId = $event;
  }

  constructor(
    private msg: NzMessageService,
    private companyService: CompanyMService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private areaService: AreaService,
    private industryService:IndustryService
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
    this.getProvince();
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.companyId = params.companyId;
        this.getCompanyDetail();

      }
    );
  }

  provinceChange(value: string): void {

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
          this.industryId = detail.industryId;

          this.provinceChange(this.province);
          this.cityChange(this.city);
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
    console.log(this.industryId);
    this.companyService.editCompany(this.companyId,this.industryId, this.name, this.province, this.city, this.area, this.address, this.phone, this.nature, this.profile,
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

  getAllByTree():void{
    this.industryService.getAllByTree(1).subscribe(
      res=>{
        if (res.errorCode == 0){
          this.nodes = res.data;
        } else{
          this.msg.warning(res.msg);
        }
      },err=>{
        this.msg.error('服务异常');
      }
    )
  }

}
