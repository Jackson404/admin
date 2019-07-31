import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpService} from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class NewsMService {
  idToken: any = window.localStorage.getItem('idToken');

  constructor(public http: HttpService) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    const url = '/api/v1.admin.News/getByPageWithAdmin';

    return this.http.doPost(url, params);
  }

  getPageByCateIdAdmin(cateId, pageIndex, pageSize): Observable<any> {
    const params = 'categoryId=' + cateId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    const url = '/api/v1.admin.News/getNewsPageByCateIdWithAdmin';

    return this.http.doPost(url, params);
  }

  getNewsCategoryList(): Observable<any> {
    const url = '/api/v1.admin.NewsCategory/getAll';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addNews(categoryId, title, keywords, description, content, imgUrl, isShow) {

    const url = '/api/v1.admin.News/add';
    const formData = new FormData();
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('imgUrl', imgUrl);
    formData.append('isShow', isShow);
    formData.append('id_token', this.idToken);
    return this.http.doPostFormData(url, formData);
  }

  delNews(newsId): Observable<any> {
    const url = '/api/v1.admin.News/del';
    const params = 'newsId=' + newsId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getNewsDetail(newsId): Observable<any> {
    const url = '/api/v1.admin.News/getDetail';
    const params = 'newsId=' + newsId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editNews(newsId, categoryId, title, keywords, description, content, imgUrl, isShow): Observable<any> {
    const url = '/api/v1.admin.News/edit';

    const formData = new FormData();
    formData.append('newsId', newsId);
    formData.append('categoryId', categoryId);
    formData.append('title', title);
    formData.append('keywords', keywords);
    formData.append('description', description);
    formData.append('content', content);
    formData.append('imgUrl', imgUrl);
    formData.append('isShow', isShow);
    formData.append('id_token', this.idToken);

    return this.http.doPostFormData(url, formData);
  }


}
