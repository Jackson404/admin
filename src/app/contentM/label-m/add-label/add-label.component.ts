import {Component, OnInit} from '@angular/core';
import {LabelMService} from '../../../service/labelM/label-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-label',
  templateUrl: './add-label.component.html',
  styleUrls: ['./add-label.component.css']
})
export class AddLabelComponent implements OnInit {

  name: any;

  constructor(
    private labelService: LabelMService,
    private msg: NzMessageService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  addLabel(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.labelService.addLabel(this.name, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('添加成功');
          this.router.navigateByUrl('/home/labelM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

}
