import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ForgotPaswordComponent } from './forgot-pasword/forgot-pasword.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ProductoComponent } from './producto/producto.component';
import { VentaComponent } from './venta/venta.component';
import { DeudoresComponent } from './deudores/deudores.component';
import { ReporteComponent } from './reporte/reporte.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'new-user', component: NewUserComponent },
    { path: 'forgot-password', component: ForgotPaswordComponent },
    { path: 'reset-password', component: ResetPasswordComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'deudores', component: DeudoresComponent },
    { path: 'reportes', component: ReporteComponent },
    { path: 'configuracion', component: ConfiguracionComponent },
    { path: 'venta', component: VentaComponent }
 ];
