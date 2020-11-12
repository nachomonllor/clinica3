import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private auth: AuthService, private router: Router) { }
  email: string;
  password: string;
  error: any;
  //roles: ['Administrador', 'Paciente', 'Profesional'];
  //selectedDevice: string;


  ngOnInit(): void {
    // this.form = new FormGroup( 
    //    {  "email": new FormControl( Validators.required }
    // );
    this.createForms();
  }
 
  createForms() {
    //const email = this.lsService.get('email');
    this.form = new FormGroup({
    email: new FormControl(  null, Validators.required),
    password: new FormControl(null, Validators.required),
    //remember: new FormControl(email ? true : false )
     role: new FormControl("profesional", Validators.required)
    });
    }
 

  rolSeleccionado: string = "Administrador";

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.rolSeleccionado = event.target.value;
  }



  login(){
    
    //e.preventDefault(); //evita que se recargue la pagina
    this.auth.login(this.form.get('email').value, this.form.get('password').value).then(
      
      resp => {
        //debugger
        const role =this.form.get('role').value;
        //this.router.navigate(['/home'])
        if(role == "administrador") {
            this.router.navigate(['/homeAdmin'])
        }
        else if (role== "profesional"){
          this.router.navigate(['/homeProfesional'])
        }
        else if(role== "paciente") {
          this.router.navigate(['/homePaciente'])
        }

      }
    ).catch(
      error => {
        this.error = error;
      }
    )

  }

  // login(e){
  //   e.preventDefault(); //evita que se recargue la pagina
  //   this.auth.login(this.email, this.password).then(
  //     resp => {
  //       this.router.navigate(['/home'])
  //     }
  //   ).catch(
  //     error => {
  //       this.error = error;
  //     }
  //   )

  // }


}