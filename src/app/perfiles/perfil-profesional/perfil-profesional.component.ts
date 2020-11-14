import { Component, OnInit } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';

@Component({
  selector: 'app-perfil-profesional',
  templateUrl: './perfil-profesional.component.html',
  styleUrls: ['./perfil-profesional.component.css']
})
export class PerfilProfesionalComponent implements OnInit {
  

  profesionales = new Array<Profesional>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
