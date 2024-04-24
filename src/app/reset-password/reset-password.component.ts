import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterLinkActive, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
password: string = "";
confirmPassword: string = "";
callResetPassword(){
  if(this.password == this.confirmPassword){
    console.log("password reset");
  }
  else{
    console.log("passwords don't match");
  }
}
}
