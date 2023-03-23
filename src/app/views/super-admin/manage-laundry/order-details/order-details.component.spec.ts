import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { orderDetailsComponent } from './order-details.component';


describe('BookingDetailsComponent', () => {
  let component: orderDetailsComponent;
  let fixture: ComponentFixture<orderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ orderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(orderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
