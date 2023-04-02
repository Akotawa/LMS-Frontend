import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { Routes, RouterModule } from "@angular/router";
import { SharedComponentsModule } from "../../shared/shared-components/shared-components.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DriverComponent } from "./driver.component";
import { DetailsComponent } from "./details/details.component";
import { MatDialogModule } from "@angular/material/dialog";
import { LaundryDetailsComponent } from "./laundry-details/laundry-details.component";
import { BookingDetailsComponent } from "./booking-details/booking-details.component";
import { FeedbackComponent } from "./feedback/feedback.component";
import { TipHistoryComponent } from "./tip-history/tip-history.component";

const routes: Routes = [
  // { path: "", component: DriverComponent, data: { title: "Driver" } },
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
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  declarations: [
    DriverComponent,
    DetailsComponent,
    LaundryDetailsComponent,
    BookingDetailsComponent,
    FeedbackComponent,
    TipHistoryComponent,
  ],
  entryComponents: [
    DetailsComponent,
    LaundryDetailsComponent,
    BookingDetailsComponent,
    TipHistoryComponent,
    FeedbackComponent,
  ],
})
export class DriverModule {}
