import {Component, OnInit} from '@angular/core';
import {ResumeService} from '../../../service/dataM/resume.service';
import {NzMessageService} from 'ng-zorro-antd';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-resume',
  templateUrl: './edit-resume.component.html',
  styleUrls: ['./edit-resume.component.css']
})
export class EditResumeComponent implements OnInit {

  resumeId: any;
  name: any;
  sex: any;
  birth: any;
  work: any;
  wage: any;
  profession: any;
  position: any;
  qua: any;
  gra: any;
  spe: any;
  bonus: any;
  allow: any;
  resume: any;
  phone: any;
  mail: any;
  habitation: any;

  // ueditor 配置
  neditorConfig = {
    'autoClearinitialContent': true,
    'initialFrameWidth': '100%',
    'initialFrameHeight': '300',
    'autoHeightEnabled': false,
    'zIndex': 0

  };

  constructor(
    private resumeService: ResumeService,
    private msg: NzMessageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      params => {
        this.resumeId = params.resumeId;
        this.getDetail();
      }
    );
  }

  getDetail(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.resumeService.getDetail(this.resumeId, idToken).subscribe(
      res => {
        if (res.errorCode == 0) {
          this.name = res.data.detail.name;
          this.sex = res.data.detail.sex;
          this.birth = res.data.detail.birth;
          this.work = res.data.detail.work;
          this.wage = res.data.detail.wage;
          this.profession = res.data.detail.profession;
          this.position = res.data.detail.position;
          this.qua = res.data.detail.qua;
          this.gra = res.data.detail.gra;
          this.spe = res.data.detail.spe;
          this.bonus = res.data.detail.bonus;
          this.allow = res.data.detail.allow;
          this.resume = res.data.detail.resume;
          this.phone = res.data.detail.phone;
          this.mail = res.data.detail.mail;
          this.habitation = res.data.detail.habitation;

        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }

  editResume(): void {
    const idToken = window.localStorage.getItem('idToken');
    this.resumeService.editResume(this.resumeId,this.name, this.sex, this.birth, this.work, this.wage, this.profession, this.position, this.qua, this.gra, this.spe, this.bonus, this.allow, this.resume, this.phone, this.mail, this.habitation, idToken).subscribe(
      res => {
        console.log(res);
        if (res.errorCode == 0) {
          this.msg.success('编辑成功');
          this.router.navigateByUrl('/home/dataM');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        this.msg.error('服务异常');
      }
    );
  }


}
