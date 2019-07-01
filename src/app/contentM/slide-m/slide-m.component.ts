import {Component, OnInit} from '@angular/core';
import {SlideMService} from "../../service/slideM/slide-m.service";
import {NzMessageService} from "ng-zorro-antd";

@Component({
  selector: 'app-slide-m',
  templateUrl: './slide-m.component.html',
  styleUrls: ['./slide-m.component.css']
})
export class SlideMComponent implements OnInit {

  listOfData: any;

  constructor(
    public slideMService: SlideMService,
    private msg: NzMessageService
  ) {
  }

  ngOnInit() {
    this.getAllSlide();
  }

  getAllSlide(): void {

    this.slideMService.getAll().subscribe(
      res => {
        if (res.errorCode == 0) {
          this.listOfData = res.data.list;
        }
      },
      err => {
        this.msg.error('服务异常');
      }
    )
  }

}
