import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';
import { Credential } from '../models/user/Credential';
import { Router } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { Token } from '../models/user/Token';
import { User } from '../models/user/User';



@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, FormsModule, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  email:String = "";
  token:String = "";
  myVallidToken: User = new User();
  constructor( private route: ActivatedRoute, private router: Router, private UserService:UserService) { 
    this.route.params.subscribe( res =>console.log(res['email']));
    this.email = this.route.snapshot.params['email']; console.log(this.route.snapshot.params['email']); 
    this.token = this.route.snapshot.params['token']; console.log(this.route.snapshot.params['token']);
  }

password:String = "";
confirmPassword:String = "";
callReset(){
  console.log(this.password);
  console.log(this.confirmPassword);
  this.myVallidToken = this.UserService.resetPassword(
    this.token
  );
  if (this.myVallidToken.id == 1){
    var myResetPassword = this.UserService.resetrealPassword(
      this.email,
      this.password,
      this.token
    )
  }
}
}