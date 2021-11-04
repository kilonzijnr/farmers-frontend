import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './componets/sign-in/sign-in.component';
import { SignUpComponent } from './componets/sign-up/sign-up.component';
import { HomepageComponent } from './componets/homepage/homepage.component';

const routes: Routes = [
  { path: '',redirectTo:'/sign-in', pathMatch:'full'},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'homepage', component: HomepageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
