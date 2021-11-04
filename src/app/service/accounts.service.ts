import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {


  constructor(private http:HttpClient, private route:Router) { }

  registerUser(userData: any){
    console.log("User registration!")
    this.http.post(environment.link + `/accounts/register/`,userData).subscribe(response=>{
      let user:any = response
      this.route.navigate(['sign-in'])
      return user
    },error=>{
      console.log(error)
    })
  }
  signinUser(credentials:any){

     console.log("login user in progress!")
     this.http.post(environment.link + `/api-login/`, credentials).subscribe(response =>{
       let token:any = response
       sessionStorage.setItem('token',token['token'])
       this.route.navigate(['homepage'])
     }, error=>{
       console.log(error)
     })
   }
   logout(){
     sessionStorage.removeItem('currentUser');
   }

}
