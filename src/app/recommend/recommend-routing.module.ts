import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecommendComponent } from './recommend.component';
import { RecommendLoadComponent } from './recommend-list/recommend-load.component';
import { RecommendListComponent } from './recommend-list/recommend-list.component';
import { RecommendDetailComponent } from './recommend-detail/recommend-detail.component';
const routes: Routes = [
  {
    path: 'recommend',
    component: RecommendComponent,
    children: [
      {
        path: 'load',
        component: RecommendLoadComponent
      },
      {
        path: '',
        component: RecommendListComponent,
      },
      {
        path: 'detail/:id',
        component: RecommendDetailComponent,
      }
    ],
  },
  // {
  //   path: 'recommend/detail/:id',
  //   component: RecommendDetailComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecommendRoutingModule { }
