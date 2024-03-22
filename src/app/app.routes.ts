import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { NewUserComponent } from './new-user/new-user.component';
export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'forgot-password', component: ForgotPaswordComponent }
 ];
