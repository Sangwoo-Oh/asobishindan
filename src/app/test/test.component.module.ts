import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestRoutingModule } from "./test-routing.module";


import { EssenceComponent } from './essence/essence.component';
import { NonEssenceComponent } from './non-essence/non-essence.component';
import { BasicComponent } from './basic/basic.component';
import { EssenceModule } from "./essence/essence.component.module";

@NgModule({
  declarations: [
    EssenceComponent,
    NonEssenceComponent,
    BasicComponent
  ],
  imports: [
    CommonModule,
    EssenceModule,
    TestRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class TestModule { }
