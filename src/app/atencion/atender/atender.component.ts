import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-atender',
  templateUrl: './atender.component.html',
  styleUrls: ['./atender.component.css']
})
export class AtenderComponent implements OnInit {

  @Input() turno;

  preguntas = {
    presion: '',
    estatura: '',
    peso: '',
    temperatura: '',
    edad: '',
  }

  pregunta = {
    pregunta: '',
    respuesta: ''
  }
  constructor(private api: ApiService) {

   }

  ngOnInit(): void {
  }

  verCambios(pregunta){
    this.preguntas[pregunta.key] = pregunta.value;
    console.log(this.preguntas, pregunta)

  }

  agregarPregunta(){
    this.preguntas[this.pregunta.pregunta] = this.pregunta.respuesta;

  }

  guardarTurno(){
    this.turno.preguntas = this.preguntas;
    this.turno.estado = 'atendido';
    this.api.modificarTurno(this.turno)
  }
}
