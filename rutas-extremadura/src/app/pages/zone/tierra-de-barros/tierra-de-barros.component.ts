import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-tierra-de-barros',
  imports: [],
  templateUrl: './tierra-de-barros.component.html',
  styleUrl: './tierra-de-barros.component.css',
})
export class TierraDeBarrosComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Circular Villalba de los Barros – Ermita San Isidro y Pantano',
      salida: 'Villalba de los Barros',
      llegada: 'Villalba de los Barros',
      km: 19.07,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/tierra-de-barros/villalba.jpg',
      maps: 'https://www.google.com/maps/search/Villalba+de+los+Barros',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/circular-villalba-de-los-barros-ermita-san-isidro-y-pantano-9191295',
    },
    {
      nombre: 'Aceuchal – Río Guadajira',
      salida: 'Aceuchal',
      llegada: 'Río Guadajira',
      km: 17.13,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/tierra-de-barros/guadajira.jpg',
      maps: 'https://www.google.com/maps/search/Aceuchal+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-rio-guadajira-aceuchal-34773018',
    },
    {
      nombre: 'Villafranca de los Barros – Sierra de San Jorge',
      salida: 'Villafranca de los Barros',
      llegada: 'Sierra de San Jorge',
      km: 20.83,
      dificultad: 'Media',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/tierra-de-barros/sanjorge.jpg',
      maps: 'https://www.google.com/maps/search/Villafranca+de+los+Barros',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sierra-de-san-jorge-villafranca-de-los-barros',
    },
    {
      nombre: 'Villafranca de los Barros - Almendralejo',
      salida: 'AVillafranca de los Barros',
      llegada: 'Almendralejo',
      km: 18.99,
      dificultad: 'Fácil',
      duracion: '4.5 h',
      tipo: 'Circular',
      imagen: 'images/tierra-de-barros/almedralejo.jpg',
      maps: 'https://www.google.com/maps/search/Almendralejo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/via-de-la-plata-etapa-9-villafranca-de-los-barros-almendralejo-47594143',
    },
    {
      nombre: 'Camino de Santa Marta. Moleores y los Naranjos',
      salida: 'Santa Marta de los Barros',
      llegada: 'Santa Marta de los Barros',
      km: 5.93,
      dificultad: 'Media',
      duracion: '1.3 h',
      tipo: 'Solo Ida',
      imagen: 'images/tierra-de-barros/molinos.jpg',
      maps: 'https://www.google.com/maps/search/Santa+Marta+de+los+Barros',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/camino-de-santa-marta-moleores-y-los-naranjos-23905749',
    },
    {
      nombre: 'Sierra Grande de Hornachos',
      salida: 'Hornachos',
      llegada: 'Sierra Grande de Hornachos',
      km: 18.21,
      dificultad: 'Fácil',
      duracion: '6.3 h',
      tipo: 'Solo Ida',
      imagen: 'images/tierra-de-barros/hornachos.jpg',
      maps: 'https://www.google.com/maps/search/Hornachos+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sierra-grande-de-hornachos-3408900',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'tierraDeBarros', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
