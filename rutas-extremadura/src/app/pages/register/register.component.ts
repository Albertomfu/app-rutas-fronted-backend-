import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  nombre = '';
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  register() {
    this.auth
      .register({
        nombre: this.nombre,
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (res: any) => {
          console.log('Usuario creado', res); // 👈 IMPORTANTE
          this.auth.guardarSesion(res);
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error', err); // 👈 CLAVE
        },
      });
  }
}
