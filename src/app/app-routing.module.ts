import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from "./intro/intro.component";
import { Intro01Component } from "./intro/intro01/intro01.component";
import { Intro02Component } from "./intro/intro02/intro02.component";
import { Intro03Component } from "./intro/intro03/intro03.component";

import { TestComponent } from "./test/test.component";
import { EssenceComponent } from "./test/essence/essence.component";
import { QuestionsComponent } from "./test/essence/questions/questions.component";
import { EpisodesComponent } from './test/essence/episodes/episodes.component';
import { BasicComponent } from "./test/basic/basic.component";

import { RecommendComponent } from "./recommend/recommend.component";
import { RecommendListComponent } from "./recommend/recommend-list/recommend-list.component";
import { RecommendDetailComponent } from "./recommend/recommend-detail/recommend-detail.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: "intro/01",
    pathMatch: "full"
  },
  {
    path: 'intro',
    component: IntroComponent,
    children: [
      {
        path: '01',
        component: Intro01Component,
        data: {
          animation: 'intro01'
        },
      },
      {
        path: '02',
        component: Intro02Component,
        data: {
          animation: 'intro02'
        },
      },
      {
        path: '03',
        component: Intro03Component,
        data: {
          animation: 'intro03'
        },
      },

    ]
  },
  {
    path: 'test',
    component: TestComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
      {
        path: 'essence',
        component: QuestionsComponent
      },
      {
        path: 'essence/episodes/:id',
        component: EpisodesComponent
      }
    ]
  },
  {
    path: 'recommend',
    component: RecommendListComponent
  },
  {
    path: 'recommend/:id',
    component: RecommendDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
