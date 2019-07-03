import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionPageComponent } from './position-page.component';

describe('PositionPageComponent', () => {
  let component: PositionPageComponent;
  let fixture: ComponentFixture<PositionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
