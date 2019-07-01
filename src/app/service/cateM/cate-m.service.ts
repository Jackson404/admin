import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CateMService {

  constructor(
    public http: HttpService
  ) {
  }

  getAllByTree(): Observable<any> {
    const url = '/public/index.php/api/v1.CategoryManagement/getAllByTree';
    return this.http.doPost(url, '');
  }

}
