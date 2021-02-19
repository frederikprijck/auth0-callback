import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: '',
      clientId: '',
      redirectUri: window.location.origin + '/callback'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
