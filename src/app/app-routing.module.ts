import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Banner1Component } from './components/banner1/banner1.component';

const routes: Routes = [
  { path: '', redirectTo: 'banner1', pathMatch: 'full' },
  {path: 'banner1', component: Banner1Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
