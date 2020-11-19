import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';

@Component({
  selector: 'app-home-paciente',
  templateUrl: './home-paciente.component.html',
  styleUrls: ['./home-paciente.component.css']
})
export class HomePacienteComponent implements OnInit {

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
