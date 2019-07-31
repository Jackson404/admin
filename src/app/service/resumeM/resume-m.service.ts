import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeMService {
  idToken: any = window.localStorage.getItem('idToken');
  constructor(
    public http: HttpService
  ) {
  }

  // 分页获取简历
  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.Resume/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  // 获取简历的投递记录
  getResumeApplyList(resumeId): Observable<any> {
    const url = '/api/v1.admin.Resume/getResumeApplyList';
    const params = 'resumeId=' + resumeId  + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  // 获取简历的投递记录
  getResumeApplyPage(resumeId, pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.Resume/getResumeApplyPage';
    const params = 'resumeId=' + resumeId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize  + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
