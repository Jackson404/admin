import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsMComponent } from './news-m.component';

describe('NewsMComponent', () => {
  let component: NewsMComponent;
  let fixture: ComponentFixture<NewsMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
