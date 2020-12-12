import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NonEssenceComponent } from './non-essence.component';
import { NonEssenceQuestionsComponent } from './non-essence-questions/non-essence-questions.component';
import { NonEssencePreferencesComponent } from './non-essence-preferences/non-essence-preferences.component';


const routes: Routes = [
  {
    path: 'non-essence',
    component: NonEssenceComponent,
    children: [
      {
        path: '',
        component: NonEssenceQuestionsComponent
      },
      {
        path: 'preferences',
        component: NonEssencePreferencesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NonEssenceRoutingModule { }
