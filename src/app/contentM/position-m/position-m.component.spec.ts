import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionMComponent } from './position-m.component';

describe('PositionMComponent', () => {
  let component: PositionMComponent;
  let fixture: ComponentFixture<PositionMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
