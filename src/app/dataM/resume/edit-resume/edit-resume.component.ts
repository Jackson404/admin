// import {Component, OnInit} from '@angular/core';
// import {ResumeService} from '../../../service/dataM/resume.service';
// import {NzMessageService} from 'ng-zorro-antd';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-edit-resume',
//   templateUrl: './edit-resume.component.html',
//   styleUrls: ['./edit-resume.component.css']
// })
// export class EditResumeComponent implements OnInit {
//
//   idCard: any;
//   phone: any;
//   name: any;
//   sex: any;
//   sexName: any;
//   birthYear: any;
//   birth: any;
//   school: any;
//   educationName: any;
//   mail: any;
//   profession: any;
//   workYear: any;
//   exPosition: any;
//   exSalary: any;
//   exCity: any;
//   habitation: any;
//   houseLocation: any;
//   workUnit: any;
//
//   resumeDetail: any;
//   recordType:any;
//
//   constructor(
//     private resumeService: ResumeService,
//     private msg: NzMessageService,
//     private activatedRoute: ActivatedRoute,
//     private router: Router
//   ) {
//   }
//
//   ngOnInit() {
//     this.activatedRoute.queryParamMap.subscribe(
//       res => {
//         this.idCard = res.get('idCard');
//         this.phone = res.get('phone');
//         this.recordType = res.get('record');
//         this.resumeService.getDetail(this.idCard, this.phone).subscribe(
//           res => {
//             if (res.errorCode == 0) {
//               const detail = res.data.detail;
//               this.resumeDetail = res.data.detail;
//               this.name = detail.name;
//               this.sex = detail.sex;
//               // if (detail.sex ==1 ){
//               //   this.sexName = '男';
//               // }
//               // if (detail.sex == 0){
//               //   this.sexName = '女';
//               // }
//               // if (detail.sex == -1){
//               //   this.sexName = '未知';
//               // }
//               this.birthYear = detail.birthYear;
//               this.birth = detail.birth;
//               this.school = detail.school;
//               this.educationName = detail.educationName;
//               this.mail = detail.mail;
//               this.profession = detail.profession;
//               this.workYear = detail.workYear;
//               this.exPosition = detail.exPosition;
//               this.exSalary = detail.exSalary;
//               this.exCity = detail.exCity;
//               this.habitation = detail.habitation;
//               this.houseLocation = detail.houseLocation;
//               this.workUnit = detail.workUnit;
//             } else {
//               this.msg.warning(res.msg);
//             }
//           }, err => {
//             this.msg.error('服务异常');
//           }
//         );
//       }
//     );
//   }
//
//   editResume(): void {
//
//   }
//
//
// }
