import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Profesional } from '../clases/profesional';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  profesionalSeleccionado : boolean = false;
  profesional;
  seleccion = "";

  constructor() { }
  ngOnInit(): void {
  }

  mostrarTurnos(){
    this.seleccion = "turnos";
  }

  mostrarCartilla() {
    this.seleccion = "cartilla";
  }


  pedirTurno(profesional: Profesional){
    console.log("En componente turno:", profesional);

    //if(this.profesionalSeleccionado) 
    this.profesional = profesional;
    this.profesionalSeleccionado = true;

  }

}
