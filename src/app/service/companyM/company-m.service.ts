import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyMService {

  constructor(
    public http: HttpService
  ) {
  }

  public getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.CompanyManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize;
    return this.http.doPost(url, params);
  }

  // name: any;
  //   province: any;
  //   city: any;
  //   area: any;
  //   address: any;
  //   phone: any;
  //   nature: any;
  //   profile: any;
  //   remark: any;
  //   contact: any;
  //   wxNumber: any;
  //   leader: any;

  addCompany(name, province, city, area, address, phone, nature, profile, remark, contact, wxNumber, leader, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.CompanyManagement/add';
    const params = 'name=' + name + '&province=' + province + '&city=' + city + '&area=' + area + '&address=' + address +
      '&phone=' + phone + '&nature=' + nature + '&profile=' + profile + '&remark=' + remark + '&contact=' + contact +
      '&wxNumber=' + wxNumber + '&leader=' + leader + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  delCompany(companyId, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.CompanyManagement/del';
    const params = 'companyId=' + companyId + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getPositionPageByCompanyId(companyId, pageIndex, pageSize, idToken): Observable<any> {
    const url = '/public/index.php/api/v1.PositionManagement/getPositionPageByCompanyId';
    const params = 'companyId=' + companyId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + idToken;
    return this.http.doPost(url, params);
  }

  getAllCompany(): Observable<any> {
    const url='/public/index.php/api/v1.CompanyManagement/getAll';
    return this.http.doPost(url,'');
  }
}
