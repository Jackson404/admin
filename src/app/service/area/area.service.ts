import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(
    private http: HttpService
  ) {
  }

  getProvince(): Observable<any> {
    const url = '/public/index.php/api/v1.Area/getProvince';
    return this.http.doPost(url, '');
  }

  getCity(province): Observable<any> {
    const url = '/public/index.php/api/v1.Area/getCity';
    const params = 'province=' + province;
    return this.http.doPost(url, params);
  }

  getArea(city): Observable<any> {
    const url = '/public/index.php/api/v1.Area/getArea';
    const params = 'city=' + city;
    return this.http.doPost(url, params);
  }
}
