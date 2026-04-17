import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';
@Component({
  selector: 'app-las-villuercas',
  imports: [],
  templateUrl: './las-villuercas.component.html',
  styleUrl: './las-villuercas.component.css',
})
export class LasVilluercasComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Camino Natural de Las Villuercas',
      salida: 'Puerto Rey',
      llegada: 'Logrosán',
      km: 76,
      dificultad: 'Alta',
      duracion: 'Variada',
      tipo: 'Solo ida',
      imagen: 'images/villuercas/5534625Master.jpg',
      maps: 'https://www.google.com/maps?q=Puerto+Rey+Extremadura',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/gr-116-camino-natural-de-las-villuercas-9311553',
    },
    {
      nombre: 'Pico Villuercas (circular)',
      salida: 'Navezuelas',
      llegada: 'Pico Villuercas',
      km: 16,
      dificultad: 'Difícil',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/picoVilluercas.jpg',
      maps: 'https://www.google.com/maps/search/Pico+Villuercas+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/navezuelas-864m-pico-villuercas-1595m-19-5km-y-773m-desnivel-ruta-circular-99226893',
    },
    {
      nombre: 'Geoparque Las Villuercas',
      salida: 'Cabañas del Castillo',
      llegada: 'Geoparque Villuercas',
      km: 28.4,
      dificultad: 'Media',
      duracion: '8,30 h',
      tipo: 'Lineal',
      imagen: 'images/villuercas/geoparque.jpg',
      maps: 'https://www.google.com/maps/search/Cabañas+del+Castillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-coche/geoparque-villuercas-ibores-jara-caceres-itinerario-geologico-a-la-villuerca-guadalupe-pico-villuer-100694364',
    },
    {
      nombre: 'Navezuelas pico Villuercas',
      salida: 'Navezuelas',
      llegada: 'Pico Villuercas',
      km: 22.62,
      dificultad: 'Media',
      duracion: '6‑7 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/navezuela.jpg',
      maps: 'https://www.google.com/maps/search/Navezuelas+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/navezuelas-pico-villuercas-navezuelas-20851756',
    },
    {
      nombre: 'Sierra de las Acebadillas',
      salida: 'Cañamero',
      llegada: 'Roturas / La Solana',
      km: 2,
      dificultad: 'Media',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/acebadillas.jpg',
      maps: 'https://www.google.com/maps/search/sierra+de+las+acebadillas,+extremadura/@39.47383,-5.7830702,91002m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sierra-de-las-acebadillas-villuercas-210757397',
    },
    {
      nombre: 'Molinos del Guadalupejo y Embalse',
      salida: 'Guadalupe',
      llegada: 'Molinos y Embalse',
      km: 14.8,
      dificultad: 'Media',
      duracion: '6,3 h',
      tipo: 'Circular',
      imagen: 'images/villuercas/molinos.jpg',
      maps: 'https://www.google.com/maps/search/Guadalupe+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/molinos-del-guadalupejo-y-viaducto-3707712',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'alagon', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
