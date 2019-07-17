import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  idToken: any = window.localStorage.getItem('idToken');

  constructor(
    private http: HttpService
  ) {
  }

  getProvince(): Observable<any> {
    const url = '/public/index.php/api/v1.admin.Area/getProvince';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getCity(province): Observable<any> {
    const url = '/public/index.php/api/v1.admin.Area/getCity';
    const params = 'province=' + province + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getArea(city): Observable<any> {
    const url = '/public/index.php/api/v1.admin.Area/getArea';
    const params = 'city=' + city + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  filterAreaInfo(info): Observable<any> {
    const url = '/public/index.php/api/v1.admin.Area/filterAreaInfo';
    const params = 'info=' + info + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }
}
