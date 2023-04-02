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
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRouting,
    MatTableModule,
    MatCardModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatChipsModule,
    MatRippleModule,
    MatListModule,
    MatOptionModule,
    MatIconModule,
    MatMenuModule,
    MatProgressBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatPaginatorModule,
    MatButtonModule
    
  ],
  declarations: [OrderStatusComponent, OrderManagementComponent, OrderTransitComponent, EmployeeComponent, InventoryManagementComponent, RegisterOrderComponent, AddInventoryComponent,],
  entryComponents : [OrderStatusComponent, OrderManagementComponent, OrderTransitComponent, InventoryManagementComponent],
})
export class EmployeeModule { }
