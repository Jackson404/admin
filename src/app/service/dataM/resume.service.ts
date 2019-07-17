import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  idToken: any = window.localStorage.getItem('idToken');
  constructor(
    private http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize+ '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getCount(): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/getCount';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getDetail(resumeId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/getDetail';
    const params = 'resumeId=' + resumeId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  delResume(resumeId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/delResume';
    const params = 'resumeId=' + resumeId+ '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editResume(resumeId, name, sex, birth, work, wage, profession, position, qua, gra, spe, bonus, allow, resume, phone, mail, habitation): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/editResume';
    const params = 'resumeId=' + resumeId + '&name=' + name + '&sex=' + sex + '&birth=' + birth + '&work=' + work + '&wage=' + wage + '&profession=' + profession + '&position=' + position +
      '&qua=' + qua + '&gra=' + gra + '&spe=' + spe + '&bonus=' + bonus + '&allow=' + allow + '&resume=' + resume + '&phone=' + phone + '&mail=' + mail + '&habitation=' + habitation + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
