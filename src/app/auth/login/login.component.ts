import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  email: string;
  password: string;
  error: any;
  ngOnInit(): void {
  }

  login(e){
    e.preventDefault(); //evita que se recargue la pagina
    this.auth.login(this.email, this.password).then(
      resp => {
        this.router.navigate(['/home'])
      }
    ).catch(
      error => {
        this.error = error;
      }
    )

  }

}
