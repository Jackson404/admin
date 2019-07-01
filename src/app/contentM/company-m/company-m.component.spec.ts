import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMComponent } from './company-m.component';

describe('CompanyMComponent', () => {
  let component: CompanyMComponent;
  let fixture: ComponentFixture<CompanyMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
