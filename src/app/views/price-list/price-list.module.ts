import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ChartsModule } from 'ng2-charts';
import {
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatFormFieldModule,
  MatDialogModule,
} from "@angular/material";
import { SharedComponentsModule } from "../../shared/shared-components/shared-components.module";
import { SharedMaterialModule } from "../../shared/shared-material.module";
import { PriceListComponent } from "./price-list.component";
import { AddPriceComponent } from './add-price/add-price.component';

const routes: Routes = [
  { path: "", component: PriceListComponent, data: { title: "PriceList" } },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModule,
    MatPaginatorModule,
    ChartsModule,
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
  declarations: [PriceListComponent, AddPriceComponent],
  entryComponents: [AddPriceComponent],

})
export class PriceListModule {}
