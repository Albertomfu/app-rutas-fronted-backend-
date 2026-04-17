import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';
@Component({
  selector: 'app-olivenza',
  imports: [],
  templateUrl: './olivenza.component.html',
  styleUrl: './olivenza.component.css',
})
export class OlivenzaComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Ruta de los Puentes de Ajuda',
      salida: 'Olivenza',
      llegada: 'Puente de Ajuda',
      km: 19.78,
      dificultad: 'Fácil',
      duracion: '6 h',
      tipo: 'Circular',
      imagen: 'images/olivenza/puentes.jpg',
      maps: 'https://www.google.com/maps/search/Puente+de+Ajuda+Olivenza',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/pr-ba-126-puente-ajuda-olivenza-379740',
    },
    {
      nombre: 'Ruta Olivenza – Villarreal',
      salida: 'Olivenza',
      llegada: 'Villarreal (Portugal)',
      km: 15.2,
      dificultad: 'Fácil',
      duracion: '4.30 h',
      tipo: 'Circular',
      imagen: 'images/olivenza/villarreal.jpg',
      maps: 'https://www.google.com/maps/search/Vila+Real+Portugal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/olivenza-villarreal-12683879',
    },
    {
      nombre: 'Ruta Embalse de Piedra Aguda',
      salida: 'Embalse de Piedra Aguda',
      llegada: 'Embalse de Piedra Aguda',
      km: 19.47,
      dificultad: 'Media',
      duracion: '4.30 h',
      tipo: 'Circular',
      imagen: 'images/olivenza/piedra.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Piedra+Aguda',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/embalse-de-piedra-aguda-91946284',
    },
    {
      nombre: 'Olivenza - San Amaro',
      salida: 'Olivenza',
      llegada: 'Olivenza',
      km: 14.46,
      dificultad: 'Fácil',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/olivenza/amaro.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Guadiana+Olivenza',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/olivenza-san-amaro-olivenza-18068414',
    },
    {
      nombre: 'Ruta San Jorge de Alor – Dehesas',
      salida: 'San Jorge de Alor',
      llegada: 'San Jorge de Alor',
      km: 10.32,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Solo Ida',
      imagen: 'images/olivenza/alor.jpg',
      maps: 'https://www.google.com/maps/search/San+Jorge+de+Alor',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/sierra-de-alor-15918107',
    },
    {
      nombre: 'Ruta de las Corujas',
      salida: 'Olivenza',
      llegada: 'Alconchel',
      km: 16.55,
      dificultad: 'Fácil',
      duracion: '3.3 h',
      tipo: 'Circular',
      imagen: 'images/olivenza/corujas.jpg',
      maps: 'https://www.google.com/maps/search/Alconchel+Badajoz',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-de-las-corujas-9617709',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'olivenza', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
