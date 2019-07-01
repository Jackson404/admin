import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMComponent } from './slide-m.component';

describe('SlideMComponent', () => {
  let component: SlideMComponent;
  let fixture: ComponentFixture<SlideMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
