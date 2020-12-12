import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NonEssenceQuestionsComponent } from './non-essence-questions/non-essence-questions.component';
import { NonEssencePreferencesComponent } from './non-essence-preferences/non-essence-preferences.component';


@NgModule({
  declarations: [
    NonEssenceQuestionsComponent,
    NonEssencePreferencesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class NonEssenceModule { }
