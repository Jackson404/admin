import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

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
    return this.http.doPost(url, '');
  }

  // 添加轮播图
  addSlide(imgUrl, remark, turnUrl, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.SlideShow/add';
    const params = 'imgUrl=' + imgUrl + '&remark=' + remark + '&turnUrl=' + turnUrl + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  //删除轮播图
  delSlide(slideId,idToken):Observable<any>{
    const url = '/public/index.php/api/v1.SlideShow/delById';
    const params = 'id='+slideId+'&id_token='+idToken;
    return this.http.doPost(url,params);
  }
}
