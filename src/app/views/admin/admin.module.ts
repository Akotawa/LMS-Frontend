import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsModule } from '../../layouts/layouts.module';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { AdminRouting } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import { ServiceCatagoueComponent } from './service-catagoue/service-catagoue.component';
import { ViewDetailsComponent } from './employee-management/view-details/view-details.component';
import { ServiceAddComponent } from './service-add/service-add.component';


const routes: Routes = [
  { path: "", component: AdminComponent, data: { title: "Admin" } },
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    FlexLayoutModule,
    SharedComponentsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    AdminRouting,
    
  ],
  declarations: 
  [AdminComponent,
    ServiceCatagoueComponent,
    RegisterEmployeeComponent,
    EmployeeManagementComponent,
    ViewDetailsComponent,
    ServiceAddComponent,
  ],
  entryComponents: [
    RegisterEmployeeComponent,
    ServiceCatagoueComponent,
    EmployeeManagementComponent,
    ViewDetailsComponent
  ],
})
export class AdminModule { }
