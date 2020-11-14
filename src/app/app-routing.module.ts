import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ListadoProfesionalesComponent } from './turnos/listado-profesionales/listado-profesionales.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  { path: 'login', component : LoginComponent/*,
canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToHome } */},
    { path: 'registro', component : RegistroComponent/*,
canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToHome }*/ },
/*    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
     canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin } }, */
     { path: 'turnos', component : TurnosComponent},
     {path: 'turnos/cartilla', component: ListadoProfesionalesComponent }
];

/* const routes: Routes = [
    {path: 'login', component : LoginComponent},
  
    
]; */



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
