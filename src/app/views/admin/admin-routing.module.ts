import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { ServiceCatagoueComponent } from './service-catagoue/service-catagoue.component';
import { ServiceAddComponent } from './service-add/service-add.component';



const routes: Routes = [
{
  path: 'register-employee',
  component: RegisterEmployeeComponent,
  data: {
    title: 'Register Employee'
  }
},
{
  path: 'manage-employee',
  component: EmployeeManagementComponent,
  data: {
    title: 'Employee Management'
  }
},
{
  path: 'add-Service',
  component: ServiceAddComponent,
  data: {
    title: 'add Service'
  }
},
{
  path: 'service-catalogue',
  component: ServiceCatagoueComponent,
  data: {
    title: 'Service Catalogue'
  }
},

];

export const AdminRouting: ModuleWithProviders = RouterModule.forChild(routes);
