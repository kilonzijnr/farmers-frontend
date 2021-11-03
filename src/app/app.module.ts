import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './componets/homepage/homepage.component';
import { NavbarComponent } from './componets/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
