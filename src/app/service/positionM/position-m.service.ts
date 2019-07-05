import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';
import {max} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PositionMService {

  constructor(
    public http: HttpService
  ) {
  }

  getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }

  addPosition(positionCateId, name, companyId, minPay, maxPay, minWorkExp, maxWorkExp, education, age, num, labelIds, isSoldierPriority, address, positionRequirement, isShow, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/add';
    const params = 'positionCateId=' + positionCateId + '&name=' + name + '&companyId=' + companyId + '&minPay=' + minPay + '&maxPay=' + maxPay +
      '&minWorkExp=' + minWorkExp + '&maxWorkExp=' + maxWorkExp + '&education=' + education + '&age=' + age + '&num=' + num + '&labelIds=' + labelIds +
      '&isSoldierPriority=' + isSoldierPriority + '&address=' + address + '&positionRequirement=' + positionRequirement + '&isShow=' + isShow + '&id_token=' + idToken;
    return this.http.doPost(url, params);

  }

  delPosition(positionId, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/del';
    const params = 'positionId=' + positionId + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getPositionDetail(positionId): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/getDetail';
    const params = 'positionId=' + positionId;
    return this.http.doPost(url, params);
  }

  // 编辑职位
  editPosition(positionId, positionCateId, name, companyId, minPay, maxPay, minWorkExp, maxWorkExp, education, age, num, labelIds, isSoldierPriority, address, positionRequirement, isShow, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/edit';
    const params = 'positionId=' + positionId + '&positionCateId=' + positionCateId + '&name=' + name + '&companyId=' + companyId + '&minPay=' + minPay + '&maxPay=' + maxPay +
      '&minWorkExp=' + minWorkExp + '&maxWorkExp=' + maxWorkExp + '&education=' + education + '&age=' + age + '&num=' + num + '&labelIds=' + labelIds +
      '&isSoldierPriority=' + isSoldierPriority + '&address=' + address + '&positionRequirement=' + positionRequirement + '&isShow=' + isShow + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getResumePageByPositionId(positionId, pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.Resume/getResumePageByPositionId';
    const params = 'positionId=' + positionId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }
}
