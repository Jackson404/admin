import {Component, OnInit} from '@angular/core';
import {ReviewService} from '../../service/review/review.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-msg',
  templateUrl: './msg.component.html',
  styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit {

  userList: any = [];
  title: any;
  content: any;
  recUserId: any;

  constructor(
    protected reviewService: ReviewService,
    protected msg: NzMessageService,
    protected router: Router
  ) {
  }

  ngOnInit() {
    this.getUserList();
  }

  getUserList(): void {
    this.reviewService.getUserList().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.userList = res.data.list;
          // console.log(res.data.list);
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  addMsg(): void {
    this.reviewService.addMsg(this.title, this.content, this.recUserId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('发送成功');
          this.router.navigateByUrl('/home/epMsg');
        } else {
          this.msg.warning(res.msg);
        }
      }, error => {
        this.msg.error('服务异常');
      }
    );
  }


}
