import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  idToken: any = window.localStorage.getItem('idToken');

  constructor(
    private http: HttpService
  ) {
  }

  getAllByTree(type = 0): Observable<any> {
    const url = '/api/v1.admin.Industry/getAllByTree';
    const params = 'type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getAllTopIndustry(): Observable<any> {
    const url = '/api/v1.admin.Industry/getAllTopIndustry';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  filterIndustryInfo(info): Observable<any> {
    const url = '/api/v1.admin.Industry/filterIndustryInfo';
    const params = 'info=' + info + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
