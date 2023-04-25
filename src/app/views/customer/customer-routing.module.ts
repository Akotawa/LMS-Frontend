import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { CustomerPasswordChangeComponent } from './customer-password-change/customer-password-change.component';
import { ReferFriendComponent } from './refer-friend/refer-friend.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';



const routes: Routes = [
{
  path: 'profile',
  component: ProfileComponent,
  data: {
    title: 'Profile'
  }
},
{
  path: 'place-order',
  component: PlaceOrderComponent,
  data: {
    title: 'Place Order'
  }
},
{
  path: 'change-pass',
  component: CustomerPasswordChangeComponent,
  data: {
    title: 'Change Password'
  }
},
{
  path: 'refer',
  component: ReferFriendComponent,
  data: {
    title: 'Refer Friend'
  }
},
{
  path: 'track-order',
  component: TrackOrderComponent,
  data: {
    title: 'Track Order'
  }
},
{
  path: 'customer-add',
  component: CustomerAddComponent,
  data: {
    title: ' customer Add'
  }
},
{
  path: 'contact',
  component: ContactUsComponent,
  data: {
    title: 'Contact Us'
  }
},
// {
//   path: 'feedback',
//   component: FeedbackComponent,
//   data: {
//     title: 'feedback'
//   }
// }
];

export const CustomerRouting: ModuleWithProviders = RouterModule.forChild(routes);
