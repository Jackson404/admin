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
    const url = '/public/index.php/api/v1.News/getByPageWithAdmin';

    return this.http.doPost(url, params);
  }

  getNewsCategoryList(): Observable<any> {
    const url = '/public/index.php/api/v1.NewsCategory/getAll';
    const params = '';
    return this.http.doPost(url, params);
  }

  addNews(categoryId, title, keywords, description, content, imgUrl, isShow, idToken) {

    const url = '/public/index.php/api/v1.News/add';
    const params = 'categoryId=' + categoryId + '&title=' + title + '&keywords=' + keywords + '&description=' + description
      + '&content=' + content + '&imgUrl=' + imgUrl + '&isShow=' + isShow + '&id_token=' + idToken;

    return this.http.doPost(url, params);
  }

  delNews(newsId, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.News/del';
    const params = 'newsId=' + newsId + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getNewsDetail(newsId): Observable<any> {
    const url = '/public/index.php/api/v1.News/getDetail';
    const params = 'newsId=' + newsId;
    return this.http.doPost(url, params);
  }

  editNews(newsId, categoryId, title, keywords, description, content, imgUrl, isShow, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.News/edit';
    const params = 'newsId=' + newsId + '&categoryId=' + categoryId + '&title=' + title + '&keywords=' + keywords + '&description=' + description
      + '&content=' + content + '&imgUrl=' + imgUrl + '&isShow=' + isShow + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }


}
