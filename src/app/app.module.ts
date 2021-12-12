import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundPickerComponent } from './background-picker/background-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundPickerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BackgroundPickerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
