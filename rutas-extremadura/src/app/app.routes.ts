import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LasHurdesComponent } from './pages/zone/las-hurdes/las-hurdes.component';
import { TrujilloComponent } from './pages/zone/trujillo/trujillo.component';
import { LaVeraComponent } from './pages/zone/la-vera/la-vera.component';
import { AlagonComponent } from './pages/zone/alagon/alagon.component';
import { ElJerteComponent } from './pages/zone/el-jerte/el-jerte.component';
import { ZonasComponent } from './pages/zonas/zonas.component';
import { AlburquerqueComponent } from './pages/zone/alburquerque/alburquerque.component';
import { AlcantaraComponent } from './pages/zone/alcantara/alcantara.component';
import { AmbrozComponent } from './pages/zone/ambroz/ambroz.component';
import { BadajozComponent } from './pages/zone/badajoz/badajoz.component';
import { CaceresComponent } from './pages/zone/caceres/caceres.component';
import { CampinaSurComponent } from './pages/zone/campina-sur/campina-sur.component';
import { CampoAranueloComponent } from './pages/zone/campo-aranuelo/campo-aranuelo.component';
import { DonBenitoComponent } from './pages/zone/don-benito/don-benito.component';
import { JerezDeLosCaballerosComponent } from './pages/zone/jerez-de-los-caballeros/jerez-de-los-caballeros.component';
import { LaSerenaComponent } from './pages/zone/la-serena/la-serena.component';
import { LaSiberiaComponent } from './pages/zone/la-siberia/la-siberia.component';
import { LasVilluercasComponent } from './pages/zone/las-villuercas/las-villuercas.component';
import { LosIboresComponent } from './pages/zone/los-ibores/los-ibores.component';
import { MeridaComponent } from './pages/zone/merida/merida.component';
import { OlivenzaComponent } from './pages/zone/olivenza/olivenza.component';
import { SierraDeGataComponent } from './pages/zone/sierra-de-gata/sierra-de-gata.component';
import { TentudiaComponent } from './pages/zone/tentudia/tentudia.component';
import { TierraDeBarrosComponent } from './pages/zone/tierra-de-barros/tierra-de-barros.component';
import { ValenciaDeAlcantaraComponent } from './pages/zone/valencia-de-alcantara/valencia-de-alcantara.component';
import { InfoComponent } from './pages/info/info.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'rutas', pathMatch: 'full' },
  {
    path: 'admin',
    loadComponent: () =>
      import('./pages/admin/admin.component').then((m) => m.AdminComponent),
    canActivate: [authGuard],
  },
  { path: '', component: HomeComponent },
  { path: 'zonas', component: ZonasComponent },
  { path: 'info', component: InfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
  },
  { path: 'lasHurdes', component: LasHurdesComponent },
  { path: 'trujillo', component: TrujilloComponent },
  { path: 'laVera', component: LaVeraComponent },
  { path: 'alagon', component: AlagonComponent },
  { path: 'elJerte', component: ElJerteComponent },
  { path: 'alburquerque', component: AlburquerqueComponent },
  { path: 'ambroz', component: AmbrozComponent },
  { path: 'badajoz', component: BadajozComponent },
  { path: 'caceres', component: CaceresComponent },
  { path: 'campinaSur', component: CampinaSurComponent },
  { path: 'campoAranuelo', component: CampoAranueloComponent },
  { path: 'donBenito', component: DonBenitoComponent },
  { path: 'jerezDeLosCaballeros', component: JerezDeLosCaballerosComponent },
  { path: 'laSerena', component: LaSerenaComponent },
  { path: 'laSiberia', component: LaSiberiaComponent },
  { path: 'lasVilluercas', component: LasVilluercasComponent },
  { path: 'losIbores', component: LosIboresComponent },
  { path: 'merida', component: MeridaComponent },
  { path: 'olivenza', component: OlivenzaComponent },
  { path: 'tentudia', component: TentudiaComponent },
  { path: 'tierraDeBarros', component: TierraDeBarrosComponent },
  { path: 'valenciaDeAlcantara', component: ValenciaDeAlcantaraComponent },
  { path: 'sierraDeGata', component: SierraDeGataComponent },
  { path: 'alcantara', component: AlcantaraComponent },
];
