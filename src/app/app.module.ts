import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { Appareil2Component } from './appareil2/appareil2.component';
import { Appareil3Component } from './appareil3/appareil3.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { Appareil4Component } from './appareil4/appareil4.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { Appareil5Component } from './appareil5/appareil5.component';
import { DefaultRoutingComponent } from './default-routing/default-routing.component';

const appRoutes: Routes = [
  { path: 'appareils', component: AppareilViewComponent },
  { path: 'appareils/:id', component: SingleAppareilComponent },
  { path: 'auth', component: AuthComponent },
  { path: '', component: DefaultRoutingComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    Appareil2Component,
    Appareil3Component,
    Appareil4Component,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    SingleAppareilComponent,
    Appareil5Component,
    DefaultRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
