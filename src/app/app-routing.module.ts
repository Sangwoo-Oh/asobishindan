import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from "./intro/intro.component";
import { Intro01Component } from "./intro/intro01/intro01.component";
import { Intro02Component } from "./intro/intro02/intro02.component";
import { Intro03Component } from "./intro/intro03/intro03.component";

import { TestComponent } from "./test/test.component";

const routes: Routes = [
  {
    path: '',
    component: Intro01Component,
    data: {
      animation: 'intro01'
    }
  },
  {
    path: 'intro/01',
    component: Intro01Component,
    data: {
      animation: 'intro01'
    }
  },
  {
    path: 'intro/02',
    component: Intro02Component,
    data: {
      animation: 'intro02'
    }
  },
  {
    path: 'intro/03',
    component: Intro03Component,
    data: {
      animation: 'intro03'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
