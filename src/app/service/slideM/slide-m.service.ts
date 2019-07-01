import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SlideMService {

  constructor(
    public http: HttpService
  ) {
  }

  public getAll(): Observable<any> {
    const url = '/public/index.php/api/v1.SlideShow/getAll';
    return this.http.doPost(url,'');
  }
}
