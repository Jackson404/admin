import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";

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

  getAllLabels():Observable<any>{
    const url = '/public/index.php/api/v1.LabelManagement/getAllLabels';
    return this.http.doPost(url,'');
  }

}
