import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EssenceComponent } from './essence/essence.component';
import { NonEssenceComponent } from './non-essence/non-essence.component';
import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    EssenceComponent,
    NonEssenceComponent,
    BasicComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class TestModule { }
