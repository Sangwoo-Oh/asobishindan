import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Intro01Component } from './intro01/intro01.component';
import { Intro02Component } from './intro02/intro02.component';
import { Intro03Component } from './intro03/intro03.component';

@NgModule({
  declarations: [
    Intro01Component,
    Intro02Component,
    Intro03Component
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class IntroModule { }
