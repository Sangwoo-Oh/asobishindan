import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from "./intro/intro.component";

const routes: Routes = [
  {
    path: '',
    component: IntroComponent
  },
  {
    path: 'intro',
    component: IntroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
