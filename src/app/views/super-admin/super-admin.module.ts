import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';
import { CouponsComponent } from './coupons/coupons.component';
import { ManageLaundryComponent } from './manage-laundry/manage-laundry.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { SuperAdminRouting } from './super-admin-routing.module';
import { RegisterLaundryComponent } from './register-laundry/register-laundry.component';
import { AddCouponComponent } from './coupons/add-coupon/add-coupon.component';
import { LayoutsModule} from '../../layouts/layouts.module';
import { ChangePasswordAdminComponent } from './change-password-admin/change-password-admin.component'
import { Error404Component } from '../../external-pages/error-404/error-404.component';
import { laundryDetailsComponent } from './manage-laundry/details/details.component';
import { laundryFeedbackComponent } from './manage-laundry/feedback/feedback.component';
import { orderDetailsComponent } from './manage-laundry/order-details/order-details.component';
// import {MenuSidenavComponent} from '../../layouts/components/menu-sidenav/menu-sidenav.component'

const routes: Routes = [
  { path: "", component: SuperAdminComponent, data: { title: "Super Admin" } },
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
    SuperAdminRouting
  ],
  declarations: [
    SuperAdminComponent,
    ManageLaundryComponent,
    CouponsComponent,
    RegisterLaundryComponent,
    AddCouponComponent,
    ChangePasswordAdminComponent,
    orderDetailsComponent,
    laundryFeedbackComponent,
    laundryDetailsComponent,
  ],
  entryComponents: [
    ManageLaundryComponent,
    CouponsComponent,
    RegisterLaundryComponent,
    AddCouponComponent,
    orderDetailsComponent,
    laundryFeedbackComponent,
    laundryDetailsComponent,
  ],
})
export class SuperAdminModule { }
