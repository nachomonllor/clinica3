import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';



import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { TurnosComponent } from './turnos/turnos.component';
import { ListadoProfesionalesComponent } from './turnos/listado-profesionales/listado-profesionales.component';
import { HomeProfesionalComponent } from './home/home-profesional/home-profesional.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { HomePacienteComponent } from './home/home-paciente/home-paciente.component';
import { TurnosRecibidosComponent } from './turnos/turnos-recibidos/turnos-recibidos.component';
import { AltaTurnosComponent } from './turnos/alta-turnos/alta-turnos.component';
import { AtenderComponent } from './atencion/atender/atender.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['/']);

const routes: Routes = [
  { path: 'login', component : LoginComponent, canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToHome }},
    { path: 'registro', component : RegistroComponent/*,
canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectLoggedInToHome }*/ },

     { path: 'turnos', component : TurnosComponent},
     {path: 'turnos/cartilla', component: ListadoProfesionalesComponent },

     {path: 'home-profesional', component: HomeProfesionalComponent ,  canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }},
     {path: 'home-admin', component: HomeAdminComponent,  canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin } },
     {path: 'home-paciente', component: HomePacienteComponent ,  canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }},

     { path: 'profesional', children:[
      { path: 'horarios', component: AltaTurnosComponent },
      { path: 'turnos_recibidos', component: TurnosRecibidosComponent},
      { path: 'atender', component: AtenderComponent}
    ], canActivate: [AngularFireAuthGuard],  data: { authGuardPipe: redirectUnauthorizedToLogin }},
];

/* const routes: Routes = [
    {path: 'login', component : LoginComponent},
  
    
]; */



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
