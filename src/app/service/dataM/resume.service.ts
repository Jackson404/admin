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
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getDetail(idCard, phone): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/getDetail';
    const params = 'idCard=' + idCard + '&phone=' + phone + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  filterResumeData(posKey, exWorkLocation, workExp, educationName, minAge, maxAge, sex, pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/filterResumeData';
    const formData = new FormData();
    formData.append('posKey', posKey);
    formData.append('exWorkLocation', exWorkLocation);
    formData.append('workExp', workExp);
    formData.append('educationName', educationName);
    formData.append('minAge', minAge);
    formData.append('maxAge', maxAge);
    formData.append('sex', sex);
    formData.append('pageIndex', pageIndex);
    formData.append('pageSize', pageSize);
    formData.append('id_token', this.idToken);
    return this.http.doPostFormData(url, formData);
  }

  addRecord(recordName, remark, posKey, exWorkLocation, workExp, educationName, minAge, maxAge, sex): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/addRecord';
    const formData = new FormData();
    formData.append('recordName', recordName);
    formData.append('remark', remark);
    formData.append('posKey', posKey);
    formData.append('exWorkLocation', exWorkLocation);
    formData.append('workExp', workExp);
    formData.append('educationName', educationName);
    formData.append('minAge', minAge);
    formData.append('maxAge', maxAge);
    formData.append('sex', sex);
    // formData.append('filterData', JSON.stringify(filterData));
    formData.append('id_token', this.idToken);
    return this.http.doPostFormData(url, formData);
  }

  updateRecord(recordId,recordName, remark, posKey, exWorkLocation, workExp, educationName, minAge, maxAge, sex): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/updateRecord';
    const formData = new FormData();
    formData.append('recordId',recordId);
    formData.append('recordName', recordName);
    formData.append('remark', remark);
    formData.append('posKey', posKey);
    formData.append('exWorkLocation', exWorkLocation);
    formData.append('workExp', workExp);
    formData.append('educationName', educationName);
    formData.append('minAge', minAge);
    formData.append('maxAge', maxAge);
    formData.append('sex', sex);
    // formData.append('filterData', JSON.stringify(filterData));
    formData.append('id_token', this.idToken);
    return this.http.doPostFormData(url, formData);
  }

  getRecordByDate(date): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/getRecordByDate';
    const params = 'date=' + date + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addStar(idCard, phone, type): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/addStar';
    const params = 'idCard=' + idCard + '&phone=' + phone + '&type=' + type + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  delResume(idCard, phone): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/delResume';
    const params = 'idCard=' + idCard + '&phone=' + phone + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editResume(idCard, phone, name, sex, birthYear, birth, school, education, educationName, mail, profession, professionId,
             workYear, exPosition, exSalary, exCity, habitation, houseLocation, workUnit): Observable<any> {
    const url = '/public/index.php/api/v1.admin.ResumeData/edit';
    const formData = new FormData();
    formData.append('idCard', idCard);
    formData.append('phone', phone);
    formData.append('name', name);
    formData.append('sex', sex);
    formData.append('birthYear', birthYear);
    formData.append('birth', birth);
    formData.append('school', school);
    formData.append('education', education);
    formData.append('educationName', educationName);
    formData.append('mail', mail);
    formData.append('profession', profession);
    formData.append('professionId', professionId);
    formData.append('workYear', workYear);
    formData.append('exPosition', exPosition);
    formData.append('exSalary', exSalary);
    formData.append('exCity', exCity);
    formData.append('habitation', habitation);
    formData.append('houseLocation', houseLocation);
    formData.append('workUnit', workUnit);
    formData.append('id_token', this.idToken);
    return this.http.doPostFormData(url, formData);
  }
}
