import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabelMService {

  constructor(
    public http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }

  getAllLabels(): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/getAllLabels';
    return this.http.doPost(url, '');
  }

  addLabel(name, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/add';
    const params = 'name=' + name + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  delLabel(labelId, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/del';
    const params = 'labelId=' + labelId + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getLabelDetail(labelId): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/getDetail';
    const params = 'labelId=' + labelId;
    return this.http.doPost(url, params);
  }

  editLabel(labelId, name, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.LabelManagement/edit';
    const params = 'labelId=' + labelId + '&name=' + name + '&id_token=' + idToken;
    return this.http.doPost(url, params);

  }

}
