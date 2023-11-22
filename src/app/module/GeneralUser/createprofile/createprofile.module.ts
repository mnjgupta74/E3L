import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
// import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MaterialModule } from 'src/app/material.module';
import { MatRadioModule } from '@angular/material/radio';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { CreateprofileComponent } from './createprofile.component';
// import { HomeRoutingModule } from '@angular/forms';

@NgModule({
    declarations: [
       CreateprofileComponent,
    ],
    imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      // NgSelectModule,
      MaterialModule,
      MatRadioModule,
      NgxMatSelectSearchModule
    ],
    providers: [],
    exports: [
        CreateprofileComponent
    ]
  })
  export class CreateProfileModule { }