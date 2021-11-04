import { User } from 'src/app/class/user';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/service/accounts.service';
import { Component, OnInit, Output, EventEmitter } from'@angular/core';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';
  confim_password: string = '';
  address: string = '';

  constructor(private service: AccountsService, private route: Router) {}
  signup(){
let signupForm = new FormData();
signupForm.append('username',this.username),
signupForm.append('email',this.email),
signupForm.append('password',this.password),
signupForm.append('confim_password',this.confim_password),
signupForm.append('address',this.address),
console.log(signupForm)
    this.service.registerUser(signupForm)

  }

  ngOnInit(): void {}
}
