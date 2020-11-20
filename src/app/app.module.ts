import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { Intro01Component } from './intro/intro01/intro01.component';
import { Intro02Component } from './intro/intro02/intro02.component';
import { Intro03Component } from './intro/intro03/intro03.component';

import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TestComponent,
    Intro01Component,
    Intro02Component,
    Intro03Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
