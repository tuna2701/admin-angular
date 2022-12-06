import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TypeComponent } from './type.component';

describe('TypeComponent', () => {
  let component: TypeComponent;
  let fixture: ComponentFixture<TypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
