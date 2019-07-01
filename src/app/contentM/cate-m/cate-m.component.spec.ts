import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateMComponent } from './cate-m.component';

describe('CateMComponent', () => {
  let component: CateMComponent;
  let fixture: ComponentFixture<CateMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
