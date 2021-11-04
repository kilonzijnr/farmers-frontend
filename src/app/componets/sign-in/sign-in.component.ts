import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Route } from '@angular/router';
import { AccountsService } from 'src/app/service/accounts.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  username:string = '';
  password:string = '';


  constructor(private route: Router, private login:AccountsService ) {}


  retrieve(){
    let signinForm = new FormData();
    signinForm.append('username',this.username),
    signinForm.append('password',this.password),
    this.login.signinUser(signinForm)
  }
 logout(){

    sessionStorage.removeItem('currentUser')
    console.log("logged out")
    this.route.navigate(['main'])
    ;
  }
  ngOnInit(): void {}
}
