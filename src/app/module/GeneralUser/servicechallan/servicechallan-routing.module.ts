import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicechallanComponent } from './servicechallan.component';


const routes: Routes = [
  { path: 'ServiceChallan', component: ServicechallanComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class servicechallanRoutingModule { }