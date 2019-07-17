import {Component, OnInit} from '@angular/core';
import {CateMService} from '../../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

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
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
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

  addCate(): void {
    this.cateService.addCate(this.name, this.pid).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
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
