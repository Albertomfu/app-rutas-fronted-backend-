import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {}

  login() {
    this.auth
      .login({
        email: this.email,
        password: this.password,
      })
      .subscribe((res: any) => {
        this.auth.guardarSesion(res); // 🔥 AQUÍ

        this.router.navigate(['/']);
      });
  }
}
