import { Component, OnInit } from '@angular/core';
import { Profesional } from '../clases/profesional';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
   
  seleccion = "";

  mostrarTurnos(){
    this.seleccion = "turnos";
  }

  mostrarCartilla() {
    this.seleccion = "cartilla";
  }

  profesionalSeleccionado : boolean = false;
  profesional;
  pedirTurno(profesional: Profesional){
    console.log("En componente turno:", profesional);

    //if(this.profesionalSeleccionado) 
    this.profesional = profesional;
    this.profesionalSeleccionado = true;

  }

}
