import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelMComponent } from './label-m.component';

describe('LabelMComponent', () => {
  let component: LabelMComponent;
  let fixture: ComponentFixture<LabelMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabelMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
