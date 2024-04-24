import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user/User';

@Component({
  selector: 'app-forgot-pasword',
  standalone: true,
  imports: [RouterLink, RouterOutlet,RouterLinkActive, FormsModule],
  templateUrl: './forgot-pasword.component.html',
  styleUrl: './forgot-pasword.component.css'
})
export class ForgotPaswordComponent {

  constructor(private userService: UserService) 
  { }
  email: String = "";
  myValidatedUser: User = new User();

  resetPassword(){
    console.log(this.email);
    this.myValidatedUser = this.userService.validateUser(this.email);
  }
}
