import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonComponent } from './common/common.component';
import { HeaderComponent } from './common/header/header.component';

import { IntroComponent } from './intro/intro.component';
import { Intro01Component } from './intro/intro01/intro01.component';
import { Intro02Component } from './intro/intro02/intro02.component';
import { Intro03Component } from './intro/intro03/intro03.component';

import { TestComponent } from './test/test.component';
import { EssenceComponent } from './test/essence/essence.component';
import { QuestionsComponent } from './test/essence/questions/questions.component';
import { EpisodesComponent } from './test/essence/episodes/episodes.component';
import { ConfirmComponent } from './test/essence/confirm/confirm.component';
import { PreferencesComponent } from './test/essence/preferences/preferences.component';
import { PreferenceListComponent } from './test/essence/preferences/preference-list.component';

import { NonEssenceComponent } from './test/non-essence/non-essence.component';
import { NonEssenceQuestionsComponent } from './test/non-essence/non-essence-questions/non-essence-questions.component';
import { BasicComponent } from './test/basic/basic.component';
import { RecommendComponent } from './recommend/recommend.component';
import { RecommendDetailComponent } from './recommend/recommend-detail/recommend-detail.component';
import { RecommendListComponent } from './recommend/recommend-list/recommend-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Intro01Component,
    Intro02Component,
    Intro03Component,
    TestComponent,
    EssenceComponent,
    QuestionsComponent,
    EpisodesComponent,
    ConfirmComponent,
    PreferencesComponent,
    PreferenceListComponent,
    NonEssenceComponent,
    NonEssenceQuestionsComponent,
    BasicComponent,
    RecommendComponent,
    RecommendDetailComponent,
    RecommendListComponent,
    CommonComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
