import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendComponent } from './recommend.component';
import { RecommendListComponent } from './recommend-list/recommend-list.component';
import { RecommendDetailComponent } from './recommend-detail/recommend-detail.component';
const routes: Routes = [
  {
    path: 'recommend',
    component: RecommendComponent,
    children: [
      {
        path: '',
        component: RecommendListComponent
      },
      {
        path: ':id',
        component: RecommendDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
