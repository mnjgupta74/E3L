import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankresponsereceivedComponent } from '../bankresponsereceived/bankresponsereceived.component';
import { EchallanbanksubmitComponent } from '../echallanbanksubmit/echallanbanksubmit.component';
import { PaymentinfoComponent } from '../paymentinfo/paymentinfo.component';
import { EchallanComponent } from './echallan.component';

const routes: Routes = [
  { path: 'EChallan', component: EchallanComponent },
  { path: 'BankPayment', component: PaymentinfoComponent },
  { path: 'BankResponseReceived', component: BankresponsereceivedComponent },
  // { path: 'EChallanBankSubmit', component: EchallanbanksubmitComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EChallanRoutingModule { }