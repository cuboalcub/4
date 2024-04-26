import { Component, importProvidersFrom } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormsModule} from '@angular/forms';
import { Credential } from '../models/user/Credential';
import { Router } from '@angular/router';
import { Token } from '../models/user/Token';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private userService: UserService, 
              private router: Router
    ) 
    { }
    email: String = "";
    password: String = "";
    login: Token = new Token() ;

    callLogin(){
      var mycrecential = new Credential();
      //alert("login...");
      mycrecential.email = this.email;
      mycrecential.password = this.password;

      this.login = this.userService.postLogin( mycrecential );
      if ( this.login.token != ""){
        this.router.navigate(['/home']);
      }
      console.log( this.login );
      
    }
}
