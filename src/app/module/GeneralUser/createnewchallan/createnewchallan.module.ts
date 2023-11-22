import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from 'src/app/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatExpansionModule } from '@angular/material/expansion';
import { CreatenewchallanComponent } from './createnewchallan.component';
import { createnewchallanRoutingModule } from './createnewchallan-routing.module';
// import { HomeRoutingModule } from '@angular/forms';

@NgModule({
    declarations: [
        CreatenewchallanComponent,
    ],
    imports: [
      CommonModule,
      NgSelectModule,
       createnewchallanRoutingModule,
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
        CreatenewchallanComponent
    ]
  })
  export class CreatenewchallanModule { }