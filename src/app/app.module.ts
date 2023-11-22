import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidemenuComponent } from './shared/sidemenu/sidemenu.component';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import {MatButtonToggleModule} from '@angular/material/button-toggle';
// import {MatInputModule} from '@angular/material/input';
// import {MatTableModule} from '@angular/material/table';
// import {MatAutocompleteModule} from '@angular/material/autocomplete';
// import {MatExpansionModule} from '@angular/material/expansion';
// import {MatIconModule} from '@angular/material/icon';
// import {MatTooltipModule} from '@angular/material/tooltip';
// import {MatButtonModule } from '@angular/material/button';
// import {MatCardModule } from '@angular/material/card';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
// import {MatSortModule} from '@angular/material/sort';
// import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MaterialModule } from './material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiConstants } from './shared/services/apiconstants';
import { ApiHttpService } from './shared/services/api-http.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { HomeModule } from './module/GeneralUser/home/home.module';
import { MatRadioModule } from '@angular/material/radio';
import { CreateProfileModule } from './module/GeneralUser/createprofile/createprofile.module';
import { CreatenewchallanModule } from './module/GeneralUser/createnewchallan/createnewchallan.module';
import { MobDirective } from './utility/Budget-head';
import { ServicechallanModule } from './module/GeneralUser/servicechallan/servicechallan.module';
import { ToastrModule } from 'ngx-toastr';
import { EChallanModule } from './module/Challan/echallan/echallan.module';
import { FormsModule } from '@angular/forms';
import { SharedService } from './utility/globaldata';
import { HttpErrorInterceptorService } from './shared/services/httperror-interceptor.service';

// import { DatatableComponent } from './utility/datatable/datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    MobDirective,

    // DatatableComponent
  ],
  imports: [
    MatSnackBarModule,
    MatRadioModule,
    CreateProfileModule,
    CreatenewchallanModule,
    HomeModule,
    ServicechallanModule,
    EChallanModule,
    // NgSelectModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      closeButton: true
   }),
    FormsModule
  ],
  providers: [ApiConstants, ApiHttpService,SharedService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpErrorInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
