import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    public http: HttpService
  ) {
  }

  login(username, password): Observable<any> {
    const url = '/api/v1.admin.AdminUser/login';
    const params = 'username=' + username + '&password=' + password;
    return this.http.doPost(url, params);
  }
}
