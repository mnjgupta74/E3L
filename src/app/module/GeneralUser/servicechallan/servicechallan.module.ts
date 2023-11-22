import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from 'src/app/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatExpansionModule } from '@angular/material/expansion';

import { servicechallanRoutingModule } from './servicechallan-routing.module';
import { ServicechallanComponent } from './servicechallan.component';
// import { HomeRoutingModule } from '@angular/forms';

@NgModule({
    declarations: [
       ServicechallanComponent
    ],
    imports: [
      CommonModule,
    //   NgSelectModule,
       servicechallanRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      // NgSelectModule,
      MaterialModule,
      MatRadioModule,
      NgxMatSelectSearchModule,
      MatExpansionModule
    ],
    providers: [],
    exports: [
        ServicechallanComponent
    ]
  })
  export class ServicechallanModule { }