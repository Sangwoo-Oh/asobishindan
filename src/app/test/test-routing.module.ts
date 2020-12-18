import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestComponent } from './test.component';
import { ResultComponent } from './result/result.component';
/*
import { EssenceComponent } from "./essence/essence.component";
import { QuestionsComponent } from "./essence/questions/questions.component";
import { EpisodesComponent } from './essence/episodes/episodes.component';
import { ConfirmComponent } from './essence/confirm/confirm.component';
import { PreferencesComponent } from './essence/preferences/preferences.component';
*/
const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: 'result',
        component: ResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
