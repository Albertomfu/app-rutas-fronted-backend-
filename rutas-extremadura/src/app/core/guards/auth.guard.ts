import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// 🔐 Usuario logueado
export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getUsuario();

  if (user) return true;

  router.navigate(['/login']);
  return false;
};

// 👑 Solo admin
export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const user = auth.getUsuario();

  if (user && user.role === 'admin') return true;

  router.navigate(['/']);
  return false;
};
