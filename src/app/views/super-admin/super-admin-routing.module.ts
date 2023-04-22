import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CouponsComponent } from './coupons/coupons.component';
import { RegisterLaundryComponent } from './register-laundry/register-laundry.component';
import { ManageLaundryComponent } from './manage-laundry/manage-laundry.component';
import { Error404Component } from '../../external-pages/error-404/error-404.component';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component';



const routes: Routes = [
{
  path: 'coupons',
  component: CouponsComponent,
  data: {
    title: 'Coupons'
  }
},
{
  path: 'register-laundry',
  component: RegisterLaundryComponent,
  data: {
    title: 'Register'
  }
},
{
  path: 'edit-laundry/:id',
  component: RegisterLaundryComponent,
  data: {
    title: 'Register'
  }
},
{
  path: 'manage-laundry',
  component: ManageLaundryComponent,
  data: {
    title: 'Manage Laundry'
  }
},
{
  path: 'change-password-admin',
  component: ChangePasswordAdminComponent,
  data: {
    title: 'Change Password'
  }
},
];

export const SuperAdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
