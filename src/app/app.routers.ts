import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { StripeComponent } from './stripe/stripe.component';
import { CustomerComponent } from './customer/customer.component';
import { PaypalComponent } from './paypal/paypal.component';

export const router: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent},
  { path: 'stripe', component: StripeComponent},
  { path: 'paypal', component: PaypalComponent},
];


export const routes: ModuleWithProviders = RouterModule.forRoot(router);
