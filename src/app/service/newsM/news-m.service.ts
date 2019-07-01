import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../http.service";

@Injectable({
  providedIn: 'root'
})
export class NewsMService {

  constructor(public http: HttpService) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    const url = '/public/index.php/api/v1.News/getByPage';

    return this.http.doPost(url, params);
  }
}
