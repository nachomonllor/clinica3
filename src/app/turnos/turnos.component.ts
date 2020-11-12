import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.css']
})
export class TurnosComponent implements OnInit {

  constructor() { }
  seleccion;
  ngOnInit(): void {
  }

  seleccionar(value){
    this.seleccion = value;
  }

}
