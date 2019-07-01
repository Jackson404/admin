import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeMComponent } from './resume-m.component';

describe('ResumeMComponent', () => {
  let component: ResumeMComponent;
  let fixture: ComponentFixture<ResumeMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumeMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
