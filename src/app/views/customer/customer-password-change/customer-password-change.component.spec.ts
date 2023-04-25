import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPasswordChangeComponent } from './customer-password-change.component';

describe('CustomerPasswordChangeComponent', () => {
  let component: CustomerPasswordChangeComponent;
  let fixture: ComponentFixture<CustomerPasswordChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPasswordChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPasswordChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
