import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profesional } from '../clases/profesional';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private firestore: AngularFirestore){

    }

    crearProfesional(profesional: Profesional) {
        let nuevoProfesional = Object.assign({}, profesional);
        return this.firestore.collection("profesionales").add(nuevoProfesional)
    }

    traerTodosLosProfesionales() {
        return this.firestore.collection("profesionales").snapshotChanges();
    }

}