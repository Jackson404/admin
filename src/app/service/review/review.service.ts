import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  idToken: any = window.localStorage.getItem('idToken');

  constructor(public http: HttpService) {
  }

  getListPage(pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.EpUserCert/getListPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  review(certId, pass): Observable<any> {
    const url = '/api/v1.admin.EpUserCert/review';
    const params = 'certId=' + certId + '&pass=' + pass + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getUserList(): Observable<any> {
    const url = '/api/v1.admin.EpUser/getEpUserList';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addMsg(title, content, recUserId): Observable<any> {
    const url = '/api/v1.admin.EpMsg/add';
    const params = 'title=' + title + '&content=' + content + '&recUserId=' + recUserId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
