import {Injectable} from '@angular/core';
import {HttpService} from '../http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyMService {
  idToken: any = window.localStorage.getItem('idToken');

  constructor(
    public http: HttpService
  ) {
  }

  public getByPage(pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/getByPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  addCompany(industryId, name, province, city, area, address, phone, nature, profile, remark, contact, wxNumber, leader): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/add';
    const formData = new FormData();
    formData.append('industryId', industryId);
    formData.append('name', name);
    formData.append('province', province);
    formData.append('city', city);
    formData.append('area', area);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('nature', nature);
    formData.append('profile', profile);
    formData.append('remark', remark);
    formData.append('contact', contact);
    formData.append('wxNumber', wxNumber);
    formData.append('leader', leader);
    formData.append('id_token', this.idToken);

    return this.http.doPostFormData(url, formData);
  }

  delCompany(companyId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/del';
    const params = 'companyId=' + companyId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getPositionPageByCompanyId(companyId, pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.PositionManagement/getPositionPageByCompanyId';
    const params = 'companyId=' + companyId + '&pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getAllCompany(): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/getAll';
    const params = 'id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  getCompanyDetail(companyId): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/getDetail';
    const params = 'companyId=' + companyId + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

  editCompany(companyId, industryId, name, province, city, area, address, phone, nature, profile, remark, contact, wxNumber, leader): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/edit';
    const formData = new FormData();
    formData.append('companyId', companyId);
    formData.append('industryId', industryId);
    formData.append('name', name);
    formData.append('province', province);
    formData.append('city', city);
    formData.append('area', area);
    formData.append('address', address);
    formData.append('phone', phone);
    formData.append('nature', nature);
    formData.append('profile', profile);
    formData.append('remark', remark);
    formData.append('contact', contact);
    formData.append('wxNumber', wxNumber);
    formData.append('leader', leader);
    formData.append('id_token', this.idToken);

    return this.http.doPostFormData(url, formData);
  }

  public filterCompanyInfo(areaInfo, industryInfo, pageIndex, pageSize): Observable<any> {
    const url = '/public/index.php/api/v1.admin.CompanyManagement/filterCompanyPage';
    const params = 'pageIndex=' + pageIndex + '&pageSize=' + pageSize + '&areaInfo=' + areaInfo + '&industryInfo=' + industryInfo + '&id_token=' + this.idToken;
    return this.http.doPost(url, params);
  }

}
