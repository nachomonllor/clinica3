import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire' //firebase
import {AngularFireAuthModule} from '@angular/fire/auth' //para el login
import { AngularFirestoreModule } from "@angular/fire/firestore"; //para base de datos
import { AngularFireStorageModule } from "@angular/fire/storage"; //storage (imagenes)
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroPacienteComponent } from './registro/registro-paciente/registro-paciente.component';
import { RegistroProfesionalComponent } from './registro/registro-profesional/registro-profesional.component';
import { TurnosComponent } from './turnos/turnos.component';

import { MisTurnosPacienteComponent } from './turnos/mis-turnos-paciente/mis-turnos-paciente.component';
import { PerfilProfesionalComponent } from './perfiles/perfil-profesional/perfil-profesional.component';
import { ListadoProfesionalesComponent } from './turnos/listado-profesionales/listado-profesionales.component';
import { PedirTurnoComponent } from './turnos/pedir-turno/pedir-turno.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { HomeProfesionalComponent } from './home/home-profesional/home-profesional.component';
import { HomePacienteComponent } from './home/home-paciente/home-paciente.component';
import { HomeProfesionalNoHabilitadoComponent } from './home/home-profesional-no-habilitado/home-profesional-no-habilitado.component';
import { AltaTurnosComponent } from './turnos/alta-turnos/alta-turnos.component';
import { TurnosRecibidosComponent } from './turnos/turnos-recibidos/turnos-recibidos.component';
import { AtenderComponent } from './atencion/atender/atender.component';
import { EncuestaComponent } from './atencion/encuesta/encuesta.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
    RegistroProfesionalComponent,
    RegistroPacienteComponent,
    TurnosComponent,
    MisTurnosPacienteComponent,
    PerfilProfesionalComponent,
    ListadoProfesionalesComponent,
    PedirTurnoComponent,
    HomeAdminComponent,
    HomeProfesionalComponent,
    HomePacienteComponent,
    HomeProfesionalNoHabilitadoComponent,
    AltaTurnosComponent,
    TurnosRecibidosComponent,
    AtenderComponent,
    EncuestaComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }