import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { QuestionsComponent } from './questions/questions.component';
import { EpisodesComponent } from './episodes/episodes.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    EpisodesComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class EssenceModule { }
