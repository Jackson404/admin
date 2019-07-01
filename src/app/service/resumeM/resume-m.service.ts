import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResumeMService {

  constructor(
    public http: HttpService
  ) {
  }

  // 分页获取简历
  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.Resume/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }

}
