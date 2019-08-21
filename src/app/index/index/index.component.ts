import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  isCollapsed = true;
  adminUserName: any;
  userType: any;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.adminUserName = window.localStorage.getItem('adminUserName');
    this.userType = window.localStorage.getItem('userType');
  }

  loginOut(): void {
    window.localStorage.setItem('adminUserName', null);
    window.localStorage.setItem('userType', null);
    this.router.navigateByUrl('/login');
  }
}
