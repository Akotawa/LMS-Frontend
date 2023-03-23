import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCatagoueComponent } from './service-catagoue.component';

describe('ServiceCatagoueComponent', () => {
  let component: ServiceCatagoueComponent;
  let fixture: ComponentFixture<ServiceCatagoueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCatagoueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCatagoueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
