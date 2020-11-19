import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Profesional } from 'src/app/clases/profesional';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listado-profesionales',
  templateUrl: './listado-profesionales.component.html',
  styleUrls: ['./listado-profesionales.component.css']
})
export class ListadoProfesionalesComponent implements OnInit {

  @Output() profesionalSeleccionado = new EventEmitter<Profesional>();

 
  listaProfesionales = new Array<Profesional>();
  listaProfesionalesPorApellido = new Array<Profesional>();

  listaEspecialidades = new Array<string>();
  listaDias  = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
  seleccion

  filtroApellido: FormControl;

  constructor(private apiService: ApiService) { 
    this.listaProfesionalesPorApellido = this.listaProfesionales;
    this.filtroApellido = new FormControl();
    this.filtroApellido.valueChanges.subscribe(
      text => {
        this.listaProfesionalesPorApellido = this.listaProfesionales.filter(profesional => profesional.apellido.trim().toLocaleLowerCase().includes(text.toLowerCase()) )
      }
    )

    this.apiService.traerTodosLosProfesionales().subscribe(
      (respuesta) =>{
        //console.log(respuesta);
        //console.log(respuesta[0].payload.doc.data())

        for(let i =0; i<respuesta.length; i++) {
          this.listaProfesionales.push(respuesta[i].payload.doc.data() as Profesional);
        }
        console.log(this.listaProfesionales)

        this.listaEspecialidades = Array.from(new Set(this.listaProfesionales.map(profesional => profesional.especialidades).reduce((a, b) => a.concat(b))));
        console.log(this.listaEspecialidades);
      }
    )

  }


  ngOnInit(): void {

  
  }

  filtrarProfesionalesPorEspecialidad(especialidad: string) {     
    return this.listaProfesionales.filter(profesional => profesional.especialidades.includes(especialidad))
  }

  filtrarProfesionalesPorDia(dia: string) {     
    return this.listaProfesionales.filter(profesional => profesional.dias.includes(dia))
  }

  pedirTurno(profesional:Profesional) {
    console.log("Componente listado-profesional", profesional)
    this.profesionalSeleccionado.emit(profesional)
  }


  seleccionar(value){
    this.seleccion = value;
  }
}
