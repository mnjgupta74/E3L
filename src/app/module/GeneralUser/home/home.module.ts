import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
// import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.modules';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatExpansionModule } from '@angular/material/expansion';
// import { HomeRoutingModule } from '@angular/forms';

@NgModule({
    declarations: [
       HomeComponent,
    ],
    imports: [
      CommonModule,
    //   NgSelectModule,
      HomeRoutingModule,
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
        HomeComponent
    ]
  })
  export class HomeModule { }