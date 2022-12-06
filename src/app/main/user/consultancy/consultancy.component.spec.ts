import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsultancyComponent } from './consultancy.component';

describe('ConsultancyComponent', () => {
  let component: ConsultancyComponent;
  let fixture: ComponentFixture<ConsultancyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
