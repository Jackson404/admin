import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeRecordComponent } from './resume-record.component';

describe('ResumeRecordComponent', () => {
  let component: ResumeRecordComponent;
  let fixture: ComponentFixture<ResumeRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
