import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ProgressBarComponent
  ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class CommonModule { }
