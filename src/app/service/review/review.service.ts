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

  getEpUserPage(pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.EpUser/getEpUserPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getEmUserPageByEpId(epId, pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.EpUser/getEmUserPageByEpId';
    const params = 'epId=' + epId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addEmUser(companyName, realname, realphone): Observable<any> {
    const url = '/api/v1.admin.EpUser/addEmUser';
    const params = 'companyName=' + companyName + '&realname=' + realname + '&realphone=' + realphone + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addEpUser(realname, realphone, companyName, companyAddr): Observable<any> {
    const url = '/api/v1.admin.EpUser/addEpUser';
    const params = 'companyAddr=' + companyAddr + '&companyName=' + companyName + '&realname=' + realname + '&realphone=' + realphone + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }


}
