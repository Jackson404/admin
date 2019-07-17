import {Component, OnInit} from '@angular/core';
import {CateMService} from '../../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-cate',
  templateUrl: './edit-cate.component.html',
  styleUrls: ['./edit-cate.component.css']
})
export class EditCateComponent implements OnInit {

  cateId: any;
  pid: any = 0;
  name: any;
  // 职位类型
  nodes: any = [];

  onChange($event: string): void {
    this.pid = $event;
  }

  // 职位类型结束
  constructor(
    private cateService: CateMService,
    private msg: NzMessageService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
    this.activateRoute.queryParams.subscribe(
      params => {
        this.cateId = params.cateId;
        this.getCateDetail();
      }
    );
  }

  getCateDetail(): void {
    this.cateService.getCateDetail(this.cateId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.pid = res.data.detail.pid;
          this.name = res.data.detail.name;

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
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

  editCate():void{
    this.cateService.editCate(this.cateId,this.name, this.pid).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.router.navigateByUrl('/home/cateM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
