import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  registroPaciente :boolean = false;
  registroProfesional: boolean = false;
  ngOnInit(): void {
  }
  registrarPaciente(){
    this.registroPaciente = true;
  }
  
  registrarProfesional(){
    this.registroProfesional = true;
  }
}
