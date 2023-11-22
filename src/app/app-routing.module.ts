import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EchallanComponent } from './module/Challan/echallan/echallan.component';
import { EchallanbanksubmitComponent } from './module/Challan/echallanbanksubmit/echallanbanksubmit.component';
import { PaymentinfoComponent } from './module/Challan/paymentinfo/paymentinfo.component';
import { CreatenewchallanComponent } from './module/GeneralUser/createnewchallan/createnewchallan.component';
import { CreateprofileComponent } from './module/GeneralUser/createprofile/createprofile.component';
import { HomeComponent } from './module/GeneralUser/home/home.component';
import { ServicechallanComponent } from './module/GeneralUser/servicechallan/servicechallan.component';
// import { HeaderComponent } from './Header/Header.component';
const routes: Routes = [
  // { path: '', loadChildren: () => import('./login/login/login-routing.module').then(m => m.LoginRoutingModule) },
  { path: '', component: HomeComponent },
  { path: 'CreateProfile', component: CreateprofileComponent },
  { path: 'NewChallan', component: CreatenewchallanComponent },
  { path: 'ServiceChallan', component: ServicechallanComponent },
  { path: 'EChallan', component: EchallanComponent },
  { path: 'EChallanBankSubmit', component: EchallanbanksubmitComponent },

  // { path: 'BankPayment', component: PaymentinfoComponent },

  // { path: '', loadChildren: () => import('./default/default-routing.module').then(m => m.DefaultRoutingModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
