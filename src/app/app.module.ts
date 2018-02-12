import { NgStyle } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppCardComponent } from './app-card/app-card.component';
import { AppComponent } from './app.component';

@NgModule({

  declarations: [AppComponent, AppCardComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
