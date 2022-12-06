import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentIncomeComponent } from './student-income.component';

describe('StudentIncomeComponent', () => {
  let component: StudentIncomeComponent;
  let fixture: ComponentFixture<StudentIncomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentIncomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
