import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideMService {
  idToken: any = window.localStorage.getItem('idToken');
  constructor(
    public http: HttpService
  ) {
  }

  // 添加轮播图
  addSlide(imgUrl, remark, turnUrl, type): Observable<any> {
    const url = '/api/v1.admin.SlideShow/add';
    const params = 'imgUrl=' + imgUrl + '&remark=' + remark + '&turnUrl=' + turnUrl + '&type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  //删除轮播图
  delSlide(slideId): Observable<any> {
    const url = '/api/v1.admin.SlideShow/delById';
    const params = 'id=' + slideId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getDetail(slideId): Observable<any> {
    const url = '/api/v1.admin.SlideShow/getDetail';
    const params = 'id=' + slideId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editSlide(slideId, imgUrl, remark, turnUrl, type): Observable<any> {
    const url = '/api/v1.admin.SlideShow/edit';
    const params = 'id=' + slideId + '&imgUrl=' + imgUrl + '&remark=' + remark + '&turnUrl=' + turnUrl + '&type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getAll(type): Observable<any> {
    const url = '/api/v1.admin.SlideShow/getAll';
    const params = 'type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }
}
