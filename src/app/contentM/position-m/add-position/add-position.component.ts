import {Component, OnInit} from '@angular/core';
import {CateMService} from '../../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {LabelMService} from '../../../service/labelM/label-m.service';
import {CompanyMService} from '../../../service/companyM/company-m.service';
import {PositionMService} from '../../../service/positionM/position-m.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.css']
})

export class AddPositionComponent implements OnInit {

  positionCateId: any;
  name: any;
  companyId: any;
  minPay: any;
  maxPay: any;
  minWorkExp: any;
  maxWorkExp: any;
  education: any;
  num: any;
  age: any;
  isSoldierPriority: any;
  address: any;
  positionRequirement: any;
  isShow: any;

  companyList: any = [];

  // ueditor 配置
  neditorConfig = {
    'initialContent': '请输入内容',
    'autoClearinitialContent': true,
    'initialFrameWidth': 800,
    'initialFrameHeight': 300,

  };


  // 职位类型
  nodes: any = [];

  onChange($event: string): void {
    this.positionCateId = $event;
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
    private positionService: PositionMService
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
    this.getAllLabels();
    this.getAllCompany();
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

  addPosition(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.positionService.addPosition(this.positionCateId, this.name, this.companyId, this.minPay, this.maxPay, this.minWorkExp, this.maxWorkExp,
      this.education, this.age, this.num, this.selectedLabels, this.isSoldierPriority, this.address, this.positionRequirement,
      this.isShow, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
