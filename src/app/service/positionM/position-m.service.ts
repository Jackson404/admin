import {Injectable} from '@angular/core';
import {HttpService} from "../http.service";
import {Observable} from "rxjs";
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
//positionCateId	是	string	职位分类id
// name	是	string	职位名字
// companyId	是	string	公司id
// minPay	是	string	最低薪资
// maxPay	是	string	最高薪资
// minWorkExp	是	string	最低工作年限
// maxWorkExp	是	string	最高工作年限
// education	否	string	学历
// age	否	string	年龄
// num	是	string	职位招聘人员数量
// labelIds	否	string	标签id字符串 英文逗号分隔
// isSoldierPriority	否	string	是否军人优先
// address	否	string	公司地址
// positionRequirement	否	string	岗位职责
// isShow	否	string	是否展示 1是 0否 默认1
// id_token
  addPosition(positionCateId,name,companyId,minPay,maxPay,minWorkExp,maxWorkExp,education,age,num,labelIds,isSoldierPriority,address,positionRequirement,isShow,idToken):Observable<any>{
    const url = '/public/index.php/api/v1.PositionManagement/add';
    const params = 'positionCateId='+positionCateId+'&name='+name+'&companyId='+companyId+'&minPay='+minPay+'&maxPay='+maxPay+
      '&minWorkExp='+minWorkExp+'&maxWorkExp='+maxWorkExp+'&education='+education+'&age='+age+'&num='+num+'&labelIds='+labelIds+
      '&isSoldierPriority='+isSoldierPriority+'&address='+address+'&positionRequirement='+positionRequirement+'&isShow='+isShow+'&id_token='+idToken;
    return this.http.doPost(url,params);

  }
}
