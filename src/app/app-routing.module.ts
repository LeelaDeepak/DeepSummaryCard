import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'',
    component:FirstComponent
  },
  {
    path:'view',
    component:ViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }