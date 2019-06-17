import {MatCheckboxModule, MatTableModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRowKeyboardSelectionModule} from '../../projects/mat-row-keyboard-selection/src/lib/mat-row-keyboard-selection.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatRowKeyboardSelectionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
