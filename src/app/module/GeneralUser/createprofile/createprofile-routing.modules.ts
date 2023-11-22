import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateprofileComponent } from './createprofile.component';

const routes: Routes = [
  { path: 'CreateProfile', component: CreateprofileComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }