//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EssenceRoutingModule } from "./essence-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { QuestionsComponent } from './questions/questions.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    EpisodesComponent,
    ConfirmComponent,
    PreferencesComponent,
    PreferenceListComponent
  ],
  imports: [
    //BrowserModule,
    CommonModule,
    EssenceRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class EssenceModule { }
