import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssenceComponent } from './essence.component';
import { QuestionsComponent } from './questions/questions.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { PreferenceListComponent } from './preferences/preference-list.component';


const routes: Routes = [
  {
    path: '',
    component: EssenceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EssenceRoutingModule { }
