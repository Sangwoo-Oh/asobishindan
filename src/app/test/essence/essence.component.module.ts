import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QuestionsComponent } from './questions/questions.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PreferencesComponent } from './preferences/preferences.component';


@NgModule({
  declarations: [
    QuestionsComponent,
    EpisodesComponent,
    ConfirmComponent,
    PreferencesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class EssenceModule { }
