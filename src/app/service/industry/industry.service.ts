import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {

  constructor(
    private http: HttpService
  ) {
  }

  getAllByTree(type = 0): Observable<any> {
    const url = '/public/index.php/api/v1.Industry/getAllByTree';
    const params = 'type=' + type;
    return this.http.doPost(url,params);
  }
}
