import { Component, Input, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';

@Component({
  selector: 'app-pedir-turno',
  templateUrl: './pedir-turno.component.html',
  styleUrls: ['./pedir-turno.component.css']
})
export class PedirTurnoComponent implements OnInit {

  @Input() profesional : Profesional; 

  constructor() { }

  ngOnInit(): void {
    console.log("en nuevo turno", this.profesional)
  }

}
