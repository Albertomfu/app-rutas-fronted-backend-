import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeleccionMapaService } from '../seleccion-mapa.service';

@Component({
  selector: 'app-extremadura-map',
  templateUrl: './extremadura-map.component.html',
  styleUrls: ['./extremadura-map.component.css'],
  imports: [RouterLink],
})
export class ExtremaduraMapComponent {
  constructor(
    // private router: Router,
    private mapService: SeleccionMapaService
  ) {}

  // Llamar este método al hacer clic en una zona
  onZonaClick(zona: string) {
    this.mapService.selectZona(zona);
  }

  // irALasHurdes() {
  //   this.router.navigate(['/lasHurdes']);
  // }
  // irATrujillo() {
  //   this.router.navigate(['/trujillo']);
  // }
  // irALaVera() {
  //   this.router.navigate(['/laVera']);
  // }
  // irAAlagon() {
  //   this.router.navigate(['/alagon']);
  // }
  // irAElJerte() {
  //   this.router.navigate(['/elJerte']);
  // }
  // irAlburquerque() {
  //   this.router.navigate(['/alburquerque']);
  // }
  // irAmbroz() {
  //   this.router.navigate(['/ambroz']);
  // }
  // irBadajoz() {
  //   this.router.navigate(['/badajoz']);
  // }
  // irCaceres() {
  //   this.router.navigate(['/caceres']);
  // }
  // irCampinaSur() {
  //   this.router.navigate(['/campinaSur']);
  // }
  // irCampoAranuelo() {
  //   this.router.navigate(['/campoAranuelo']);
  // }
  // irDonBenito() {
  //   this.router.navigate(['/donBenito']);
  // }
  // irJerezDeLosCaballeros() {
  //   this.router.navigate(['/jerezDeLosCaballeros']);
  // }
  // irLaSerena() {
  //   this.router.navigate(['/laSerena']);
  // }
  // irLaSiberia() {
  //   this.router.navigate(['/laSiberia']);
  // }
  // irLasVilluercas() {
  //   this.router.navigate(['/lasVilluercas']);
  // }
  // irLosIbores() {
  //   this.router.navigate(['/losIbores']);
  // }
  // irMerida() {
  //   this.router.navigate(['/merida']);
  // }
  // irOlivenza() {
  //   this.router.navigate(['/olivenza']);
  // }
  // irTentudia() {
  //   this.router.navigate(['/tentudia']);
  // }
  // irTierraDeBarros() {
  //   this.router.navigate(['/tierraDeBarros']);
  // }
  // irValenciaDeAlcantara() {
  //   this.router.navigate(['/valenciaDeAlcantara']);
  // }
  // irAlcantara() {
  //   this.router.navigate(['/alcantara']);
  // }
  // irSierraDeGata() {
  //   this.router.navigate(['/sierraDeGata']);
  // }
}
