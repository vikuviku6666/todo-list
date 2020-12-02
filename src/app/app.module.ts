import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { MaterialModule } from './material/material.module';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { DisplaytodoComponent } from './displaytodo/displaytodo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddtodoComponent,
    DisplaytodoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
