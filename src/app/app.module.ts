import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { NavComponent } from './core/nav/nav/nav.component';
import { FooterComponent } from './core/footer/footer/footer.component';
import { Error404Component } from './core/error404/error-404/error-404.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavComponent,
    FooterComponent,
    Error404Component
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // debug only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
