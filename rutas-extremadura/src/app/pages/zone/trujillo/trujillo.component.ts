import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';

@Component({
  selector: 'app-trujillo',
  imports: [],
  templateUrl: './trujillo.component.html',
  styleUrl: './trujillo.component.css',
})
export class TrujilloComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Ruta al Castillo de Trujillo',
      salida: 'Plaza Mayor',
      llegada: 'Castillo de Trujillo',
      km: 2.83,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/ruta-castillo-trujillo.jpg',
      maps: 'https://www.google.com/maps/search/Castillo+de+Trujillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-a-pie/paseo-por-el-casco-historico-de-trujillo-14422717',
    },
    {
      nombre: 'Ruta de los Berrocales',
      salida: 'Trujillo',
      llegada: 'Zona de berrocales',
      km: 8.66,
      dificultad: 'Medio',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/berrocal.jpg',
      maps: 'https://www.google.com/maps/search/Berrocales+Trujillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-del-berrocal-de-trujillo-por-el-zahurdon-de-las-animas-192024379',
    },
    {
      nombre: 'Ruta del Arroyo Magasca',
      salida: 'Huertas de Ánimas',
      llegada: 'Arroyo Magasca',
      km: 10.69,
      dificultad: 'Moderado',
      duracion: '2,5 h',
      tipo: 'Solo ida',
      imagen: 'images/trujillo/magasca.jpg',
      maps: 'https://www.google.com/maps/search/Arroyo+Magasca',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-monumental-33865553',
    },
    {
      nombre: 'Sendero de Santa Cruz',
      salida: 'Trujillo',
      llegada: 'Ermita de Santa Cruz',
      km: 9.77,
      dificultad: 'Moderado',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/sendero-santaCruz.jpg',
      maps: 'https://www.google.com/maps/search/Ermita+de+Santa+Cruz+Trujillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/puerto-de-santa-cruz-ruta-del-risco-grande-pico-de-san-gregorio-sierra-del-puerto-46384208',
    },
    {
      nombre: 'Ruta de la Dehesa Extremeña',
      salida: 'Trujillo',
      llegada: 'Dehesas del entorno',
      km: 7.1,
      dificultad: 'Media',
      duracion: '2,3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/dehesa-extremeña.jpg',
      maps: 'https://www.google.com/maps/search/Dehesa+Trujillo',
      wikiloc: 'https://es.wikiloc.com/rutas-a-pie/dehesa-extremena-159516100',
    },
    {
      nombre: 'Ruta del Río Tamuja',
      salida: 'Aldea del Obispo',
      llegada: 'Río Tamuja',
      km: 3,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Solo ida',
      imagen: 'images/trujillo/rita-tamatuja.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Tamuja',
      wikiloc: 'https://es.wikiloc.com/rutas-senderismo/rio-tamuja-210153076',
    },
    {
      nombre:
        'Ruta senderista al poblado de la Edad del Bronce de Robledillo de Trujillo',
      salida: 'Casco histórico',
      llegada: 'Miradores naturales',
      km: 9.25,
      dificultad: 'Difícil',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/miradores-trujillo.jpg',
      maps: 'https://www.google.com/maps/search/Miradores+de+Trujillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-senderista-al-poblado-de-la-edad-del-bronce-de-robledillo-de-trujillo-el-castillejo-40543498',
    },
    {
      nombre: 'Ruta del Berrocal de Huertas de Ánimas',
      salida: 'Huertas de Ánimas',
      llegada: 'Berrocal granítico',
      km: 8.6,
      dificultad: 'Fácil',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/trujillo/huertas-de-animas.jpg',
      maps: 'https://www.google.com/maps/search/Huertas+de+Animas',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-del-berrocal-de-trujillo-por-el-zahurdon-de-las-animas-192024379',
    },
    {
      nombre: 'Ruta Histórica Trujillana',
      salida: 'Plaza Mayor',
      llegada: 'Casco monumental',
      km: 13.99,
      dificultad: 'Fácil',
      duracion: '4 h',
      tipo: 'Solo ida',
      imagen: 'images/trujillo/casco-historico.jpg',
      maps: 'https://www.google.com/maps/search/Plaza+Mayor+Trujillo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/merida-monumental-33865553',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'trujillo', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
