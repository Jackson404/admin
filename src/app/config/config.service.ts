import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl = environment.server;

  httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})};

  httpPostOptions = {headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})};

  accessToken = '';

  constructor() {
  }
}
