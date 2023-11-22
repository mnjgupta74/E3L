import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatenewchallanComponent } from './createnewchallan.component';

const routes: Routes = [
  { path: 'NewChallan', component: CreatenewchallanComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class createnewchallanRoutingModule { }