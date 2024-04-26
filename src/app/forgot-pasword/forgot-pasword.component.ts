import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormsModule} from "@angular/forms";
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './forgot-pasword.component.html',
  styleUrl: './forgot-pasword.component.css'
})
export class ForgotPaswordComponent {
  email:String = "";
  constructor( private userService: UserService,
    private router: Router)
{ 
}
  resetPassword(){
    console.log(this.email);
    
    var myValidUser = this.userService.resetPassword(
        this.email
       );

    if (myValidUser.id != 0)
        this.router.navigate(['/']);

     console.log(myValidUser);
  }
}