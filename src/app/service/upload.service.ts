import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    public http: HttpService
  ) {
  }

  public upload(img): Observable<any> {
    const url = '/public/index.php/api/v1.File/upload';
    const params = 'img=' + img;
    return this.http.doPost(url, params);
  }

  public uploadFormData(params): Observable<any> {
    const url = '/public/index.php/api/v1.File/upload';

    return this.http.doPostFormData(url, params);
  }


}
