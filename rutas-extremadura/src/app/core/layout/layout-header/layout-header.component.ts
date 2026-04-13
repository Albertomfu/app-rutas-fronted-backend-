import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-layout-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css'],
})
export class LayoutHeaderComponent {
  usuario: any = null;

  constructor(private auth: AuthService) {} // 👈 INYECTAMOS

  ngOnInit() {
    // 🔥 Escucha cambios en tiempo real
    this.auth.usuario$.subscribe((user) => {
      this.usuario = user;
    });
  }

  logout() {
    this.auth.logout(); // 👈 usamos el service
  }
}
