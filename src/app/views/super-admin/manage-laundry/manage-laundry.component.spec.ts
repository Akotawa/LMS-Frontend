import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageLaundryComponent } from './manage-laundry.component';

describe('ManageLaundryComponent', () => {
  let component: ManageLaundryComponent;
  let fixture: ComponentFixture<ManageLaundryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageLaundryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageLaundryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
