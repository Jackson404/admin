import { Component, OnInit } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd";
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-add-news',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)"></sf>`,
  // templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css'],

})
export class AddNewsComponent implements OnInit {

  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        ui: {
          widget: 'ueditor'
        }
      }
    }
  };


  constructor(
    public msg:NzMessageService
  ) { }

  ngOnInit() {
  }


  submit(value: any) { this.msg.success(JSON.stringify(value)); }
}
