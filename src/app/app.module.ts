import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BackgroundPickerComponent } from './background-picker/background-picker.component';
import { AcronisComponent } from './acronis/acronis';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundPickerComponent,
    AcronisComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    BackgroundPickerComponent,
    AcronisComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
