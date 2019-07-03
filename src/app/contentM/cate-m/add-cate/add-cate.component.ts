import { Component, OnInit } from '@angular/core';
import {CateMService} from '../../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-add-cate',
  templateUrl: './add-cate.component.html',
  styleUrls: ['./add-cate.component.css']
})
export class AddCateComponent implements OnInit {

  pid:any;
  name:any;
  // 职位类型
  nodes: any = [];

  onChange($event: string): void {
    this.pid = $event;
  }

  // 职位类型结束
  constructor(
    private cateService: CateMService,
    private msg: NzMessageService,
  ) { }

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

  addCate():void{
    const idToken = window.localStorage.getItem('idToken');
    if (this.pid == undefined){
      this.pid = 0;
    }
    this.cateService.addCate(this.name,this.pid,idToken).subscribe(
      res=>{
        console.log(res);
      }
    )
  }
}
