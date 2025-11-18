import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [FormsModule],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css',
})
export class LoginPage {
  username:string='';
  password:string='';
  remember:boolean=false;
  router=inject(Router);
  message:string='';
  check(){
    if (this.username=='admin'&& this.password=='admin') {
      this.router.navigateByUrl('/public');
    } else {
      this.message='The username or password is incorrect.';
    }
  }
}
