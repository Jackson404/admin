import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';

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

  getNewsCategoryList(): Observable<any> {
    const url = '/public/index.php/api/v1.NewsCategory/getAll';
    const params = '';
    return this.http.doPost(url, params);
  }

  addNews(categoryId, title, keywords, description, content, imgUrl) {

    const url = '/public/index.php/api/v1.News/add';
    const params = 'categoryId=' + categoryId + '&title=' + title + '&keywords=' + keywords + '&description=' + description + '&content=' + content + '&imgUrl=' + imgUrl;

    return this.http.doPost(url, params);

  }
}
