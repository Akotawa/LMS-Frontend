import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OrderManagementComponent } from './order-management/order-management.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { OrderTransitComponent } from './order-transit/order-transit.component';
import { InventoryManagementComponent } from './inventory-management/inventory-management.component';
import { RegisterOrderComponent } from './register-order/register-order.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';



const routes: Routes = [
  {
    path: 'manage-Register',
    component: RegisterOrderComponent,
    data: {
      title: 'Order Register'
    }
  },
{
  path: 'manage-order',
  component: OrderManagementComponent,
  data: {
    title: 'Order Management'
  }
},
{
  path: 'order-status',
  component: OrderStatusComponent,
  data: {
    title: 'Order Status'
  }
},
// {
//   path: 'order-transit',
//   component: OrderTransitComponent,
//   data: {
//     title: 'Order Transit'
//   }
// },
{
  path: 'inventory',
  component: InventoryManagementComponent,
  data: {
    title: 'Inventory Management'
  }
},
{
  path: 'Inventory-Add',
  component: AddInventoryComponent,
  data: {
    title: 'Inventory Add'
  }
},
{
  path: 'Inventory-Add/:id',
  component: AddInventoryComponent,
  data: {
    title: 'Inventory Add'
  }
},

];

export const EmployeeRouting: ModuleWithProviders = RouterModule.forChild(routes);
