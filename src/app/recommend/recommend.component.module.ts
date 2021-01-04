import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RecommendRoutingModule } from './recommend-routing.module';
//import { RecommendComponent } from './recommend.component';
import { RecommendLoadComponent } from './recommend-list/recommend-load.component'
import { RecommendListComponent } from './recommend-list/recommend-list.component';
import { RecommendDetailComponent } from './recommend-detail/recommend-detail.component';



@NgModule({
  declarations: [
    //RecommendComponent,
    RecommendLoadComponent,
    RecommendListComponent,
    RecommendDetailComponent
  ],
  imports: [
    CommonModule,
    RecommendRoutingModule,
  ],
  providers: [],
  bootstrap: []
})
export class RecommendModule { }
