import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConfigService} from '../config/config.service';
import {Md5} from "ts-md5";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    public http: HttpClient,
    public config: ConfigService
  ) {
  }

  getAccessToken() {
    const grantType = Md5.hashStr('zhengbu_client_credential');
    const webId = Md5.hashStr('zhengbuwangluokejiwebid');
    const webSecret = Md5.hashStr('zhengbuwangluokejisecret');
    const url = '/public/index.php/api/Auth/getToken';
    const params = 'grantType=' + grantType + '&webId=' + webId + '&webSecret=' + webSecret;
    this.http.post(this.config.baseUrl + url, params, this.config.httpPostOptions).subscribe(
      res => {
        if (res['errorCode'] == '0') {
          localStorage.setItem('accessToken', res['data'].access_token);
        }
      }
    )

  }

  // get请求
  doGet(url: any) {
    return new Observable(observer => {
      if (localStorage.getItem('accessToken') == null) {
        this.getAccessToken();
      }
      url += '&accessToken=' + localStorage.getItem('accessToken');
      this.http.get(this.config.baseUrl + url, this.config.httpOptions).subscribe(response => {
        observer.next(response);
      }, err => {
        observer.error(err);
      });
    });
  }

  // post请求
  doPost(url: any, params?: any) {
    return new Observable(observer => {

      if (localStorage.getItem('accessToken') == null) {
        this.getAccessToken();
      }

      params += '&accessToken=' + localStorage.getItem('accessToken');
      this.http.post(this.config.baseUrl + url, params, this.config.httpPostOptions).subscribe(
        response => {
          observer.next(response);
        },
        err => {
          observer.error(err);
        });
    });
  }

  doPostForUpload(url: any, formData?: any) {
    return new Observable(observer => {
      this.http.post(this.config.baseUrl + url, formData).subscribe(
        response => {
          observer.next(response);
        },
        (err) => {
          observer.error(err);
        }
      );
    });
  }


}
