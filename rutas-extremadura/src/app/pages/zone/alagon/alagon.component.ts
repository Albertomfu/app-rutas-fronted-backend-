import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';
@Component({
  selector: 'app-alagon',
  imports: [],
  templateUrl: './alagon.component.html',
  styleUrl: './alagon.component.css',
})
export class AlagonComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Sendero del Río Alagón',
      salida: 'Coria',
      llegada: 'Puente de Hierro',
      km: 8,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/sendero-alagon.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Alagon+Coria',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/coria-ermita-virgen-de-argeme-178646215',
    },
    {
      nombre: 'Ruta de los Canchos',
      salida: 'Acehúche',
      llegada: 'Cancho del Fresno',
      km: 10,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-canchos.jpg',
      maps: 'https://www.google.com/maps/search/Acehuche+senderismo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/campos-y-senderos-por-acehuche-y-alrededores-XXXXXXX',
    },
    {
      nombre: 'Ruta del Embalse de Alcántara',
      salida: 'Alcántara',
      llegada: 'Presa de Alcántara',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alagon/ruta-embalse-alcantara.jpg',
      maps: 'https://www.google.com/maps/search/Embalse+de+Alcantara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/alcantara-cantera-circular-XXXXX',
    },
    {
      nombre: 'Sendero de la Dehesa',
      salida: 'Portezuelo',
      llegada: 'Dehesas del Alagón',
      km: 6,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-dehesa.jpg',
      maps: 'https://www.google.com/maps/search/Portezuelo+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-por-dehesas-y-campos-por-guijo-de-galisteo-XXXXXXX',
    },
    {
      nombre: 'Ruta del Castro Vetón',
      salida: 'Coria',
      llegada: 'Yacimiento Vetón',
      km: 9,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-castro-veton.jpg',
      maps: 'https://www.google.com/maps/search/Coria+yacimiento',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/coria-casco-antiguo-y-alrededores-60589659',
    },
    {
      nombre: 'Sendero del Molino',
      salida: 'Montehermoso',
      llegada: 'Molinos tradicionales',
      km: 5,
      dificultad: 'Fácil',
      duracion: '1,5 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/alagon/sendero-molino.jpg',
      maps: 'https://www.google.com/maps/search/Montehermoso+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/molinos-del-rio-alagon-casillas-de-coria-3596408',
    },
    {
      nombre: 'Ruta del Puente Romano',
      salida: 'Coria',
      llegada: 'Puente Romano',
      km: 4,
      dificultad: 'Fácil',
      duracion: '1 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/ruta-puente-romano.jpg',
      maps: 'https://www.google.com/maps/search/Puente+Romano+Coria',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/por-coria-y-su-casco-antiguo-60589659',
    },
    {
      nombre: 'Ruta de los Llanos',
      salida: 'Guijo de Galisteo',
      llegada: 'Campos del Alagón',
      km: 11,
      dificultad: 'Media',
      duracion: '4 h',
      tipo: 'Circular',
      imagen: 'images/alagon/ruta-los-llanos.jpg',
      maps: 'https://www.google.com/maps/search/Guijo+de+Galisteo',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/montehermoso-guijo-de-galisteo-guijo-de-coria-villa-del-campo-aceituna-montehermoso-27565393',
    },
    {
      nombre: 'Sendero del Monte Público',
      salida: 'Moraleja',
      llegada: 'Monte Público',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/alagon/sendero-monte-publico.jpg',
      maps: 'https://www.google.com/maps/search/Moraleja+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/montehermoso-guijo-de-galisteo-guijo-de-coria-villa-del-campo-aceituna-montehermoso-27565393',
    },
    {
      nombre: 'Ruta del Río Jerte (Tramo Bajo)',
      salida: 'Riolobos',
      llegada: 'Confluencia Jerte-Alagón',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Lineal',
      imagen: 'images/alagon/ruta-rio-jerte.jpg',
      maps: 'https://www.google.com/maps/search/Riolobos+Caceres',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/molinos-del-rio-alagon-casillas-de-coria-3596408',
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
