import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelMService {
  idToken: any = window.localStorage.getItem('idToken');

  constructor(
    public http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getAllLabels(): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/getAllLabels';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addLabel(name): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/add';
    const params = 'name=' + name + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  delLabel(labelId): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/del';
    const params = 'labelId=' + labelId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getLabelDetail(labelId): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/getDetail';
    const params = 'labelId=' + labelId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editLabel(labelId, name): Observable<any> {
    const url = '/api/v1.admin.LabelManagement/edit';
    const params = 'labelId=' + labelId + '&name=' + name + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);

  }

}
