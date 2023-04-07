import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Aula01Component } from './pages/aula01/aula01.component';
import { Aula02Component } from './pages/aula02/aula02.component';

@NgModule({
  declarations: [
    AppComponent,
    Aula01Component,
    Aula02Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
