import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profesional } from 'src/app/clases/profesional';
import { Turno } from 'src/app/clases/turno';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pedir-turno',
  templateUrl: './pedir-turno.component.html',
  styleUrls: ['./pedir-turno.component.css']
})
export class PedirTurnoComponent implements OnInit {

  @Input() profesional : Profesional; 
  @Output() cancelaTurno = new EventEmitter<Profesional>();

  turno = new Turno();

  constructor(private auth:AuthService, private api: ApiService) { }

  ngOnInit(): void {
    console.log("en nuevo turno", this.profesional)

    this.auth.user$.subscribe(
      user=>{
        if(user){         
          this.turno.email_paciente = user.email;
          
        }else{
          console.log(user);
        }
      }
        
    )
  }

  crearTurno() {
    this.turno.email_profesional = this.profesional.email;
    this.turno.estado = "pendiente";

    this.api.crearTurno(this.turno).then(resp => alert("Turno pedido correctamente"));
    console.log(this.turno);
  }

  cancelarTurno() {
    this.cancelaTurno.emit();
  }



}
