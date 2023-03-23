import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderTransitComponent } from './order-transit/order-transit.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeRouting } from './employee-routing.module';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import {MatTableModule} from '@angular/material/table';
import { RegisterOrderComponent } from './register-order/register-order.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRouting,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule
    
  ],
  declarations: [OrderStatusComponent, OrderManagementComponent, OrderTransitComponent, EmployeeComponent, InventoryManagementComponent, RegisterOrderComponent,],
  entryComponents : [OrderStatusComponent, OrderManagementComponent, OrderTransitComponent, InventoryManagementComponent],
})
export class EmployeeModule { }
