import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';
import { User} from '../models/user/User';
import { FormsModule} from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {
  constructor(private userService: UserService, 
    private router: Router
) 
{}
  myUser  = new User();
  myNewUser = new User();

  createUser(){
    this.myNewUser = this.userService.createUser(this.myUser);
    console.log(this.myNewUser);
    if(this.myNewUser.id != 0){
      this.router.navigate(['/login']);
    }
  }

}
