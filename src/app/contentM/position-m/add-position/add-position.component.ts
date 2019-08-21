import {Component, OnInit} from '@angular/core';
import {CateMService} from '../../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {LabelMService} from '../../../service/labelM/label-m.service';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {PositionMService} from '../../../service/positionM/position-m.service';
import {Router} from '@angular/router';
import {ages} from '../../../mockData/age';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})

export class AddPositionComponent implements OnInit {

  positionCateId: any;
  name: any = '';
  companyId: any;
  minPay: any = 0;
  maxPay: any = 0;
  minWorkExp: any = 0;
  maxWorkExp: any = 0;
  education: any = '不限';
  num: any = '';
  age: any = '';
  isSoldierPriority: any;
  // address: any = '';
  positionRequirement: any = '';
  isShow: any = 1;
  interviewTime: any;
  interviewTimeStamp:any;
  interviewAddress: any;
  unitPrice: any;
  endTime: any ;
  endTimeStamp:any;
  positionType: any;

  agesData: any = ages;

  companyList: any = [];

  // ueditor 配置
  neditorConfig = {
    'autoClearinitialContent': true,
    'initialFrameWidth': '100%',
    'initialFrameHeight': '300',
    'autoHeightEnabled': false,
    'zIndex': 0

  };

  // 职位类型
  nodes: any = [];
  values: any | null = null;

  onChange($event: string): void {
    this.values = $event;
    const len = $event.length;
    this.positionCateId = $event[len - 1];
  }

  // 职位类型结束

  //标签
  labels: any = [];
  selectedTags: string[] = [];
  selectedLabels: any = '';

  handleChange(checked: boolean, tag: string): void {
    if (checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }

    // 选择的标签
    this.selectedLabels = this.selectedTags.join(',');

  }

  //标签结束


  constructor(
    private cateService: CateMService,
    private msg: NzMessageService,
    private labelService: LabelMService,
    private companyService: CompanyMService,
    private positionService: PositionMService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
    this.getAllLabels();
    this.getAllCompany();
  }

  // 面试时间
  onInterviewTimeChange(result: Date): void {

    this.interviewTimeStamp = Math.round(result.getTime()/1000).toString();
  }

  onInterviewTimeOk(result: Date): void {
    this.interviewTimeStamp =  Math.round(result.getTime()/1000).toString();
  }

  // 截止时间
  onEndTimeChange(result: Date): void {
    this.endTimeStamp =  Math.round(result.getTime()/1000).toString();
  }

  onEndTimeOk(result: Date): void {
    this.endTimeStamp =  Math.round(result.getTime()/1000).toString();
  }


  //
  getAllByTree(): void {
    this.cateService.getAllByTree(1).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.nodes = res.data;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  //get all labels

  getAllLabels(): void {
    this.labelService.getAllLabels().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.labels = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  // get all company
  getAllCompany(): void {
    this.companyService.getAllCompany().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.companyList = res.data.list;
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  // 添加职位
  addPosition(): void {
    console.log(this.interviewTimeStamp);
    this.positionService.addPosition(this.positionCateId, this.name, this.companyId, this.minPay, this.maxPay, this.minWorkExp, this.maxWorkExp,
      this.education, this.age, this.num, this.selectedLabels, this.isSoldierPriority, this.positionRequirement,
      this.interviewTimeStamp, this.endTimeStamp, this.interviewAddress, this.unitPrice, this.positionType,
      this.isShow).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
          this.router.navigateByUrl('/home/positionM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  //删除职位


}
