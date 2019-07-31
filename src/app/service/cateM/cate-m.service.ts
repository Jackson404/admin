import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateMService {

  idToken: any = window.localStorage.getItem('idToken');
  constructor(
    public http: HttpService
  ) {
  }

  getAllByTree(type = 0): Observable<any> {
    const url = '/api/v1.admin.PositionCate/getAllByTree';
    const params = 'type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addCate(name, pid): Observable<any> {
    const url = '/api/v1.admin.PositionCate/add';
    const params = 'name=' + name + '&pid=' + pid + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  delCate(categoryId): Observable<any> {
    const url = '/api/v1.admin.PositionCate/del';
    const params = 'categoryId=' + categoryId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getCateDetail(categoryId): Observable<any> {
    const url = '/api/v1.admin.PositionCate/getDetail';
    const params = 'categoryId=' + categoryId+ '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editCate(categoryId, name, pid): Observable<any> {
    const url = '/api/v1.admin.PositionCate/edit';
    const params = 'categoryId=' + categoryId + '&name=' + name + '&pid=' + pid + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
