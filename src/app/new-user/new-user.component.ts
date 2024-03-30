import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-new-user',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

}
