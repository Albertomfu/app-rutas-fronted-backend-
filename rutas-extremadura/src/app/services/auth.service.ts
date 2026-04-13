import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  api = 'http://localhost:5000/api/auth';

  constructor(private http: HttpClient) {}
  usuario$ = new BehaviorSubject<any>(this.getUsuario());

  login(data: any) {
    return this.http.post(`${this.api}/login`, data);
  }

  register(data: any) {
    return this.http.post(`${this.api}/register`, data);
  }

  guardarSesion(res: any) {
    localStorage.setItem('token', res.token);
    localStorage.setItem('usuario', JSON.stringify(res.user));

    this.usuario$.next(res.user); // 🔥 AVISA A TODA LA APP
  }

  logout() {
    localStorage.clear();
    this.usuario$.next(null); // 🔥 AVISA QUE YA NO HAY USUARIO
  }

  getUsuario() {
    const user = localStorage.getItem('usuario');
    return user ? JSON.parse(user) : null;
  }
}
