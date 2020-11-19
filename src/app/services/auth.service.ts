import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth'
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Profesional } from '../clases/profesional';
import { first, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<any>


  constructor(public afAuth: AngularFireAuth, private firestore: AngularFirestore) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(
        user =>{
          if(user){
            //console.log(user.email);
            if(localStorage.getItem('role') == 'profesional') {
              return this.firestore.doc('profesionales/'+user.email).valueChanges()
            }
            else if(localStorage.getItem('role') == 'paciente') {
              return this.firestore.doc('pacientes/'+user.email).valueChanges()
            }
          }else{
            return new Observable<null>();
          }
        }
      )
    )
   }

  login(email, password){
    return this.afAuth.signInWithEmailAndPassword(email, password)
  }

  logout(){
    localStorage.clear();
    return this.afAuth.signOut();
  }

  registrarUsuario(profesional) {
    return this.afAuth.createUserWithEmailAndPassword(profesional.email, profesional.password);
  }


}
