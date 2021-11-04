import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignInComponent } from './componets/sign-in/sign-in.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomepageComponent,
    NavbarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  imports: [BrowserModule,
           AppRoutingModule],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
