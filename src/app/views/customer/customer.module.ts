import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { CustomerPasswordChangeComponent } from './customer-password-change/customer-password-change.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerRouting } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SharedMaterialModule } from '../../shared/shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatDialogModule } from '@angular/material';
import { LayoutsModule } from '../../layouts/layouts.module';
import { SharedComponentsModule } from '../../shared/shared-components/shared-components.module';
import { OrderDetailsComponent } from './track-order/order-details/order-details.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRouting,
    SharedMaterialModule,
    FlexLayoutModule,
    SharedComponentsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    LayoutsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
  ],
  declarations: [ProfileComponent, PlaceOrderComponent, TrackOrderComponent, ReferFriendComponent, CustomerPasswordChangeComponent, ContactUsComponent, CustomerComponent, OrderDetailsComponent, CustomerAddComponent],
  entryComponents: [ProfileComponent, PlaceOrderComponent, TrackOrderComponent, ReferFriendComponent, CustomerPasswordChangeComponent, ContactUsComponent, OrderDetailsComponent]
})
export class CustomerModule { }
