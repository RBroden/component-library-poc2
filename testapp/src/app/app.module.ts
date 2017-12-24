import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TestModule } from '../../../dist';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
