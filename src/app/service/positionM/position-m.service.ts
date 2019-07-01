import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionMService {

  constructor(
    public http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }
}
