import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from 'src/app/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatExpansionModule } from '@angular/material/expansion';
import { EchallanComponent } from './echallan.component';
import { EChallanRoutingModule } from './echallan-routing.module';
import { ServiceinfoComponent } from '../serviceinfo/serviceinfo.component';
import { PurposeinfoComponent } from '../purposeinfo/purposeinfo.component';
import { PaymentinfoComponent } from '../paymentinfo/paymentinfo.component';
import { RemitterinfoComponent } from '../remitterinfo/remitterinfo.component';
import { BankresponsereceivedComponent } from '../bankresponsereceived/bankresponsereceived.component';
import { EchallanbanksubmitComponent } from '../echallanbanksubmit/echallanbanksubmit.component';

// import { HomeRoutingModule } from '@angular/forms';

@NgModule({
    declarations: [
        EchallanComponent,
        ServiceinfoComponent,
        PurposeinfoComponent,
        PaymentinfoComponent,
        RemitterinfoComponent,
        BankresponsereceivedComponent,
        EchallanbanksubmitComponent
        
    ],
    imports: [
      CommonModule,
      NgSelectModule,
      EChallanRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      // NgSelectModule,
      MaterialModule,
      MatRadioModule,
      NgxMatSelectSearchModule,
      MatExpansionModule,
      
    ],
    providers: [],
    exports: [
        EchallanComponent
    ]
  })
  export class EChallanModule { }