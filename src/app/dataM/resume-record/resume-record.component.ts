import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../../service/dataM/resume.service';
import {NzMessageService} from 'ng-zorro-antd';
import {AreaService} from '../../service/area/area.service';
import {Router} from '@angular/router';
import {workExp} from '../../mockData/workExp';
import {educationTag} from '../../mockData/educationTag';
import {ageTags} from '../../mockData/ageTags';
import {sexTags} from '../../mockData/sexTags';

@Component({
  selector: 'app-resume-record',
  templateUrl: './resume-record.component.html',
  styleUrls: ['./resume-record.component.css']
})
export class ResumeRecordComponent implements OnInit {

  dateRecord: any = new Date();
  recordList: any = [];

  listOfData: any;
  pageIndex: any = 1;
  pageSize: any = 10;
  pageTotal: any;

  isVisibleResumeDetail = false;
  detail: any;
  isVisibleEdit = false;

  areaInfoData: any = [];

  isVisibleRecord = false;

  workExpTag: any = workExp;
  educationTag: any = educationTag;
  ageTag: any = ageTags;
  sexTag: any = sexTags;

  // selectedTags: string[] = [];
  ageChecked: any;
  recordShow: any = false;


  // 筛选条件
  minAge: any = '';
  maxAge: any = '';
  posKey: any = '';
  exWorkLocation: any = '';
  workExp: any = '不限';
  educationName: any = '不限';
  sex: any = '不限';

  //
  recordName: any = '';
  remark: any = '';

  nzTabPosition = 'left';
  selectedIndex = 0;

  // 编辑
  idCardE: any;
  phoneE: any;
  nameE: any;
  sexE: any;
  sexNameE: any;
  birthYearE: any;
  birthE: any;
  schoolE: any;
  educationNameE: any;
  mailE: any;
  professionE: any;
  workYearE: any;
  exPositionE: any;
  exSalaryE: any;
  exCityE: any;
  habitationE: any;
  houseLocationE: any;
  workUnitE: any;

  resumeDetail: any;
  recordType:any;

  recordId:any;

  constructor(
    private resumeService: ResumeService,
    private msg: NzMessageService,
    private areaService: AreaService,
    private router: Router
  ) {
  }

  ngOnInit() {
    const a = new Date();
    const y = a.getFullYear();
    const m = a.getMonth() + 1;
    const d = a.getDate();
    this.dateRecord = y + '-' + m + '-' + d;

    // this.filterResumePage();
    this.getRecordByDate();
    this.filterAreaInfo();
  }

  onChange(result): void {
    const y = result.getFullYear();
    const m = result.getMonth() + 1;
    const d = result.getDate();

    this.dateRecord = y + '-' + m + '-' + d;
    this.getRecordByDate();
  }


  recordSelect(record): void {

  }

  recordClick(record): void {
    this.recordId = record.id;
    this.posKey = record.posKey;
    this.recordName = record.recordName;
    this.remark = record.remark;
    this.sex = record.sex;
    this.workExp = record.workExp;
    this.minAge = record.minAge;
    this.maxAge = record.maxAge;
    this.exWorkLocation = record.exWorkLocation;
    this.educationName = record.educationName;
    this.recordShow = true;
    this.filterResumePage();
  }

  recordDeselect(record): void {
  }

  minAgeChange(): void {
    if (this.minAge == ''){
      this.minAge = 0;
    }
    this.filterResumePage();
  }

  maxAgeChange(): void {
    if (this.maxAge == ''){
      this.maxAge = 0;
    }
    this.filterResumePage();
  }

  handleWorkExpChange(checked: boolean, tag: string): void {
    if (checked) {
      this.workExp = tag;
    }
    this.filterResumePage();
  }

  handleEducationChange(checked: boolean, tag: string): void {
    if (checked) {
      this.educationName = tag;
    }
    this.filterResumePage();
  }

  handleAgeChange(checked: boolean, tag: string): void {
    if (checked) {
      if (tag == '不限') {
        this.minAge = 0;
        this.maxAge = 0;
      }
      this.ageChecked = true;
    }
    this.ageChecked = false;
    this.filterResumePage();

  }

  handleSexChange(checked: boolean, tag: string): void {
    if (checked) {
      this.sex = tag;
    }
    this.filterResumePage();
  }

  areaInfoChange($event): void {
    this.exWorkLocation = $event;
    this.filterResumePage();
  }

  posKeySearch(): void {
    this.filterResumePage();
  }

  filterAreaInfo(): void {
    this.areaService.filterAreaInfo(this.exWorkLocation).subscribe(
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

  showResumeDetail(idCard: any, phone: string): void {
    this.isVisibleResumeDetail = true;
    this.resumeService.getDetail(idCard, phone).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.detail = res.data.detail;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  handleOk(): void {
    this.isVisibleResumeDetail = false;
  }

  handleCancel(): void {
    this.isVisibleResumeDetail = false;
  }

  filterResumePage(): void {
    this.resumeService.filterResumeData(this.posKey, this.exWorkLocation, this.workExp, this.educationName, this.minAge, this.maxAge, this.sex, this.pageIndex, this.pageSize).subscribe(
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

  updateRecord():void{
    this.resumeService.updateRecord(this.recordId,this.recordName, this.remark, this.posKey, this.exWorkLocation, this.workExp, this.educationName, this.minAge, this.maxAge, this.sex).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('保存成功');
          this.ngOnInit();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


  getRecordByDate(): void {
    this.resumeService.getRecordByDate(this.dateRecord).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.recordList = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  addStar(idCard, phone): void {
    this.resumeService.addStar(idCard, phone, 1).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('加星成功');
          this.filterResumePage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  removeStar(idCard, phone): void {
    this.resumeService.addStar(idCard, phone, 0).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('去星成功');
          this.filterResumePage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  delResume(idCard, phone): void {
    this.resumeService.delResume(idCard, phone).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('删除成功');
          this.filterResumePage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  handleCancelEdit():void{
    this.isVisibleEdit = false;
  }

  handleOkEdit():void{
    this.isVisibleEdit = false;
    this.resumeService.editResume(this.idCardE, this.phoneE, this.nameE, this.sexE, this.birthYearE, this.birthE, this.schoolE, 0, this.educationNameE,
      this.mailE, this.professionE, 0, this.workYearE, this.exPositionE, this.exSalaryE, this.exCityE, this.habitationE, this.houseLocationE,
      this.workUnitE).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.filterResumePage();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  editResume(idCard,phone):void{
    this.isVisibleEdit = true;
    this.resumeService.getDetail(idCard, phone).subscribe(
      res => {
        if (res.errorCode == 0) {
          const detail = res.data.detail;
          this.resumeDetail = res.data.detail;
          this.idCardE = detail.idCard;
          this.phoneE = detail.phone;
          this.nameE = detail.name;
          this.sexE = detail.sex;
          this.birthYearE = detail.birthYear;
          this.birthE = detail.birth;
          this.schoolE = detail.school;
          this.educationNameE = detail.educationName;
          this.mailE = detail.mail;
          this.professionE = detail.profession;
          this.workYearE = detail.workYear;
          this.exPositionE = detail.exPosition;
          this.exSalaryE = detail.exSalary;
          this.exCityE = detail.exCity;
          this.habitationE = detail.habitation;
          this.houseLocationE = detail.houseLocation;
          this.workUnitE = detail.workUnit;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
