import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTransitComponent } from './order-transit.component';

describe('OrderTransitComponent', () => {
  let component: OrderTransitComponent;
  let fixture: ComponentFixture<OrderTransitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTransitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTransitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
