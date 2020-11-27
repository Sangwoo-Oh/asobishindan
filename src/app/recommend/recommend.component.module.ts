import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RecommendListComponent } from './recommend-list/recommend-list.component';
import { RecommendDetailComponent } from './recommend-detail/recommend-detail.component';



@NgModule({
  declarations: [
    RecommendListComponent,
    RecommendDetailComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class RecommendModule { }
