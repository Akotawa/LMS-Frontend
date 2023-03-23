import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
} from "@angular/material";
import { RouterModule, Routes } from "@angular/router";
import { CouponsComponent } from "./coupons.component";
import { AddCouponComponent } from "./add-coupon/add-coupon.component";

const routes: Routes = [
  { path: "", component: CouponsComponent, data: { title: "Coupons" } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    FlexLayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  declarations: [CouponsComponent, AddCouponComponent],
  entryComponents: [AddCouponComponent],
})
export class CouponsModule {}
