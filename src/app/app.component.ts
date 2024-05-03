import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { CommonModule } from '@angular/common';
import { CalendarModule} from 'primeng/calendar'


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LandingPageComponent, RouterLink, CommonModule,CalendarModule]
})
export class AppComponent {
  title = 'miselania';
}
