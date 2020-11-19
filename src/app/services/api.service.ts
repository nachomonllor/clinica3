import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profesional } from '../clases/profesional';
import { Turno } from '../clases/turno';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

    constructor(private firestore: AngularFirestore){

    }

    crearProfesional(profesional: Profesional) {
        let nuevoProfesional = Object.assign({}, profesional);
        return this.firestore.collection("profesionales").doc(nuevoProfesional.email).set(nuevoProfesional)
    }

    crearUsuario(usuario: Usuario) {
        let nuevoUsuario = Object.assign({}, usuario);
        return this.firestore.collection("pacientes").doc(nuevoUsuario.email).set(nuevoUsuario)

    }

    crearTurno(turno: Turno){
        let nuevoTurno = Object.assign({}, turno);
        return this.firestore.collection('turnos').add(nuevoTurno);
    }

    traerTodosLosProfesionales() {
        return this.firestore.collection("profesionales").snapshotChanges();
    }

    setHorariosProfesional(profesional: Profesional){
        //this.firestore.
    }

    modificarProfesional(profesional: Profesional){
        this.firestore.collection('profesionales').doc(profesional.email).set(profesional);
    }

    getProfesionalesTurnos(profesional){
        //this.firestore.collection("turnos", ref => {where})
        // emtodos los emeail_profesional que sean == a profesional.email
    }

    getPacienteTurnos(usuario){
        //email_paciente == usuario.email
        //como hacer un where buscar
    }


}