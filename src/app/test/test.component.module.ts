import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EssenceComponent } from './essence/essence.component';
import { NonEssenceComponent } from './non-essence/non-essence.component';

@NgModule({
  declarations: [
    EssenceComponent,
    NonEssenceComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class TestModule { }
