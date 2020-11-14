import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { Profesional } from '../clases/profesional';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) { }

  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    return this.afAuth.signOut();
  }

  registrarUsuario(profesional: Profesional) {
    return this.afAuth.createUserWithEmailAndPassword(profesional.email, profesional.password);
  }


}
