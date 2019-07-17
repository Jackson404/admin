import {Component, OnInit} from '@angular/core';
import {CateMService} from '../../service/cateM/cate-m.service';
import {NzMessageService} from 'ng-zorro-antd';

export interface TreeNodeInterface {
  id: number;
  name: string;
  pid: number;
  isDelete: number;
  createTime: any;
  createBy: any;
  updateTime: any;
  updateBy: any;
  level: number;
  expand: boolean;
  son?: TreeNodeInterface[];
}

@Component({
  selector: 'app-cate-m',
  templateUrl: './cate-m.component.html',
  styleUrls: ['./cate-m.component.css']
})

export class CateMComponent implements OnInit {

  listOfData: any;

  listOfMapData: any;

  constructor(
    public cateMService: CateMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getAllByTree();
  }

  mapOfExpandedData: { [id: string]: TreeNodeInterface[] } = {};

  collapse(array: TreeNodeInterface[], data: TreeNodeInterface, $event: boolean): void {
    if ($event === false) {
      if (data.son) {
        data.son.forEach(d => {
          const target = array.find(a => a.id === d.id)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: object): TreeNodeInterface[] {
    const stack: any[] = [];
    const array: any[] = [];
    const hashMap = {};
    stack.push({...root, level: 0, expand: false});

    while (stack.length !== 0) {
      const node = stack.pop();
      this.visitNode(node, hashMap, array);
      if (node.son) {
        for (let i = node.son.length - 1; i >= 0; i--) {
          stack.push({...node.son[i], level: node.level + 1, expand: false, parent: node});
        }
      }
    }

    return array;
  }

  visitNode(node: TreeNodeInterface, hashMap: { [id: string]: any }, array: TreeNodeInterface[]): void {
    if (!hashMap[node.id]) {
      hashMap[node.id] = true;
      array.push(node);
    }
  }

  //
  getAllByTree(): void {
    this.cateMService.getAllByTree().subscribe(
      res => {
        if (res.errorCode == 0) {
          // this.listOfData = res.data;
          this.listOfMapData = res.data;
          res.data.forEach(
            item => {
              this.mapOfExpandedData[item.id] = this.convertTreeToList(item);
            }
          );
        }
      }
    );
  }

  //删除分类
  delCate(cateId): void {
    this.cateMService.delCate(cateId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('删除成功');
          this.getAllByTree();
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
