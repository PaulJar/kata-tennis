import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { Appareil2Component } from './appareil2/appareil2.component';
import { Appareil3Component } from './appareil3/appareil3.component';
import { AppareilService } from './services/appareil.service';
import { Appareil4Component } from './appareil4/appareil4.component';


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    Appareil2Component,
    Appareil3Component,
    Appareil4Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppareilService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
