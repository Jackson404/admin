import {Component, OnInit} from '@angular/core';
import {LabelMService} from '../../../service/labelM/label-m.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.css']
})
export class EditLabelComponent implements OnInit {

  labelId: any;
  name: any;

  constructor(
    private labelService: LabelMService,
    private msg: NzMessageService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.activateRoute.queryParams.subscribe(
      params => {
        this.labelId = params.labelId;
        this.getLabelDetail();
      }
    );
  }

  getLabelDetail(): void {
    this.labelService.getLabelDetail(this.labelId).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.name = res.data.detail.name;

        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  editLabel(): void {
    this.labelService.editLabel(this.labelId,this.name).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
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
