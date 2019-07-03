import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CateMService {

  constructor(
    public http: HttpService
  ) {
  }

  getAllByTree(type = 0): Observable<any> {
    const url = '/public/index.php/api/v1.CategoryManagement/getAllByTree';
    const params = 'type=' + type;
    return this.http.doPost(url, params);
  }

  addCate(name, pid, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.CategoryManagement/add';
    const params = 'name=' + name + '&pid=' + pid + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  delCate(categoryId, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.CategoryManagement/del';
    const params = 'categoryId=' + categoryId + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }




}