import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionMService {
  idToken: any = window.localStorage.getItem('idToken');
  constructor(
    public http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addPosition(positionCateId, name, companyId, minPay, maxPay, minWorkExp, maxWorkExp, education, age,
              num, labelIds, isSoldierPriority, address, positionRequirement, isShow): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/add';
    const formData = new FormData();
    formData.append('positionCateId',positionCateId);
    formData.append('name',name);
    formData.append('companyId',companyId);
    formData.append('minPay',minPay);
    formData.append('maxPay',maxPay);
    formData.append('minWorkExp',minWorkExp);
    formData.append('maxWorkExp',maxWorkExp);
    formData.append('education',education);
    formData.append('age',age);
    formData.append('num',num);
    formData.append('labelIds',labelIds);
    formData.append('isSoldierPriority',isSoldierPriority);
    formData.append('positionRequirement',positionRequirement);
    formData.append('isShow',isShow);
    formData.append('id_token',this.idToken);

    return this.http.doPostFormData(url, formData);
  }

  delPosition(positionId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/del';
    const params = 'positionId=' + positionId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getPositionDetail(positionId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/getDetail';
    const params = 'positionId=' + positionId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  // 编辑职位
  editPosition(positionId, positionCateId, name, companyId, minPay, maxPay, minWorkExp, maxWorkExp,
               education, age, num, labelIds, isSoldierPriority, address, positionRequirement, isShow): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/edit';
    const formData = new FormData();
    formData.append('positionId',positionId);
    formData.append('positionCateId',positionCateId);
    formData.append('name',name);
    formData.append('companyId',companyId);
    formData.append('minPay',minPay);
    formData.append('maxPay',maxPay);
    formData.append('minWorkExp',minWorkExp);
    formData.append('maxWorkExp',maxWorkExp);
    formData.append('education',education);
    formData.append('age',age);
    formData.append('num',num);
    formData.append('labelIds',labelIds);
    formData.append('isSoldierPriority',isSoldierPriority);
    formData.append('positionRequirement',positionRequirement);
    formData.append('isShow',isShow);
    formData.append('id_token',this.idToken);

    return this.http.doPostFormData(url, formData);
  }

  getResumePageByPositionId(positionId, pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.Resume/getResumePageByPositionId';
    const params = 'positionId=' + positionId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }
}
