import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../../service/user/login.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';
import {HttpService} from '../../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private msg: NzMessageService,
    private router: Router,
    private http:HttpService
  ) {
  }

  ngOnInit(): void {
    this.http.getAccessToken();
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const username = this.validateForm.value.userName;
    const password = this.validateForm.value.password;

    this.loginService.login(username, password).subscribe(
      res => {
        if (res.errorCode == 0) {
          const idToken = res.data.id_token;
          window.localStorage.setItem('idToken', idToken);
          window.localStorage.setItem('adminUserName',res.data.username);
          window.localStorage.setItem('userType',res.data.type);
          // const strPos = idToken.indexOf('|');
          // const userId = idToken.substring(0,strPos);
          this.router.navigateByUrl('/home/welcome');
        } else {
          this.msg.warning(res.msg);
        }
      }, err => {
        console.log(err);
        this.msg.error('服务异常');
      }
    );
  }


}
