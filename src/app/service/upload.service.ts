import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  idToken = window.localStorage.getItem('idToken');

  constructor(
    public http: HttpService
  ) {
  }

  public upload(img): Observable<any> {
    const url = '/public/index.php/api/v1.admin.File/upload';
    const params = 'img=' + img + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  public uploadFormData(params): Observable<any> {
    const url = '/public/index.php/api/v1.admin.File/upload';

    return this.http.doPostFormData(url, params);
  }


}
