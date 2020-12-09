import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AssessmentHistoryComponent } from './assessment-history/assessment-history.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AssessmentHistoryComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
