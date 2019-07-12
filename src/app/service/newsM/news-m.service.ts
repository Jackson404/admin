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

  getPageByCateIdAdmin(cateId, pageIndex, pageSize): Observable<any> {
    const params = 'categoryId=' + cateId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    const url = '/public/index.php/api/v1.News/getNewsPageByCateIdWithAdmin';

    return this.http.doPost(url, params);
  }

  getNewsCategoryList(): Observable<any> {
    const url = '/public/index.php/api/v1.NewsCategory/getAll';
    const params = '';
    return this.http.doPost(url, params);
  }

  addNews(categoryId, title, keywords, description, content, imgUrl, isShow, idToken) {

    const url = '/public/index.php/api/v1.News/add';
    const formData = new FormData();
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('imgUrl', imgUrl);
    formData.append('isShow', isShow);
    formData.append('id_token', idToken);
    return this.http.doPostFormData(url, formData);
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

    const formData = new FormData();
    formData.append('newsId', newsId);
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('imgUrl', imgUrl);
    formData.append('isShow', isShow);
    formData.append('id_token', idToken);

    return this.http.doPostFormData(url, formData);
  }


}
