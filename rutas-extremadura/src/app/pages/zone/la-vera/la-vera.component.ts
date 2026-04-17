import { Component, OnInit } from '@angular/core';
import { RutasService } from '../../../services/rutas.service';
@Component({
  selector: 'app-la-vera',
  standalone: true,
  imports: [],
  templateUrl: './la-vera.component.html',
  styleUrls: ['./la-vera.component.css'],
})
export class LaVeraComponent implements OnInit {
  rutas: any[] = [];
  rutasLocales = [
    {
      nombre: 'Garganta de Cuartos',
      salida: 'Losar de la Vera',
      llegada: 'Cascada de Cuartos',
      km: 7,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/vera/garganta_de_cuartos.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+de+Cuartos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/losar-de-la-vera-a-garganta-de-cuartos-62917516',
    },
    {
      nombre: 'Ruta de las Gargantas',
      salida: 'Madrigal de la Vera',
      llegada: 'Garganta de Alardos',
      km: 9,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Circular',
      imagen: 'images/vera/garganta-alardos.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+de+Alardos',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/madrigal-de-la-vera-garganta-de-alardos-42870958',
    },
    {
      nombre: 'Ruta Carlos V',
      salida: 'Cuacos de Yuste',
      llegada: 'Jarandilla de la Vera',
      km: 10,
      dificultad: 'Media',
      duracion: '3,5 h',
      tipo: 'Solo ida',
      imagen: 'images/vera/ruta-carlosV.jpg',
      maps: 'https://www.google.com/maps/search/Ruta+Carlos+V+Yuste',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/cuacos-de-yuste-y-ruta-carlos-v-xxxxx', // no hay una con ese nombre exacto (busca directamente en Wikiloc)
    },
    {
      nombre: 'Garganta Mayor',
      salida: 'Garganta la Olla',
      llegada: 'Piscinas naturales',
      km: 6,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/vera/garganta-mayor.jpg',
      maps: 'https://www.google.com/maps/search/Garganta+la+Olla',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/madrigal-de-la-vera-piscina-natural-puente-romano-y-garganta-alardos-155370556',
    },
    {
      nombre: 'Sendero del Trabuquete',
      salida: 'Guijo de Santa Bárbara',
      llegada: 'Mirador del Trabuquete',
      km: 8,
      dificultad: 'Media',
      duracion: '3 h',
      tipo: 'Ida y vuelta',
      imagen: 'images/vera/Sendero-del-trabuquete.jpg',
      maps: 'https://www.google.com/maps/search/Guijo+de+Santa+Barbara',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/guijo-de-santa-barbara-ruta-del-trabuquete-el-campanario-ntra-sra-nieves-guijo-5550007',
    },
    {
      nombre: 'Ruta de las Nogaledas',
      salida: 'Navaconcejo',
      llegada: 'Cascadas de las Nogaledas',
      km: 5.51,
      dificultad: 'Fácil',
      duracion: '2 h',
      tipo: 'Circular',
      imagen: 'images/vera/Ruta-de-las-nogaledas.jpg',
      maps: 'https://www.google.com/maps/search/Cascadas+de+las+Nogaledas',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/garganta-de-las-nogaledas-valle-del-jerte-4355806',
    },
    {
      nombre: 'Ruta del Emperador',
      salida: 'Cuacos de Yuste',
      llegada: 'Monasterio de Yuste',
      km: 12.4,
      dificultad: 'Fácil',
      duracion: '5 h',
      tipo: 'Solo ida',
      imagen: 'images/vera/ruta-del-emperador.webp',
      maps: 'https://www.google.com/maps/search/Monasterio+de+Yuste',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-del-emperador-jarandilla-de-la-vera-aldeanueva-cuacos-monasterio-de-yuste-cuacos-la-vera-cacer-35282298',
    },
    {
      nombre: 'Garganta de Minchones',
      salida: 'Villanueva de la Vera',
      llegada: 'Charcos naturales',
      km: 2.67,
      dificultad: 'Fácil',
      duracion: '2,40 h',
      tipo: 'solo ida',
      imagen: 'images/vera/garganta-minchones.jpg',
      maps: 'https://www.google.com/maps/search/Villanueva+de+la+Vera',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/por-la-garganta-de-minchones-hasta-las-juntas-con-la-garganta-de-la-hoz-18869870',
    },
    {
      nombre: 'Ruta del Piornal, Mojón Blanco',
      salida: 'Piornal',
      llegada: 'Miradores del Valle',
      km: 15.41,
      dificultad: 'Fácil',
      duracion: '5 h',
      tipo: 'Circular',
      imagen: 'images/vera/ruta-piornal.jpg',
      maps: 'https://www.google.com/maps/search/Piornal',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/piornal-mojon-blanco-la-cantera-y-canchal-del-tren-104962487',
    },
    {
      nombre: 'Ruta el cielo de la vera',
      salida: 'Tiétar',
      llegada: 'Cascada del diablo',
      km: 24.05,
      dificultad: 'Fácil',
      duracion: '4.5 h',
      tipo: 'Solo ida',
      imagen: 'images/vera/sendero-del-tietar.jpg',
      maps: 'https://www.google.com/maps/search/Rio+Tietar',
      wikiloc:
        'https://es.wikiloc.com/rutas-senderismo/ruta-el-cielo-de-la-vera-cascada-del-diablo-el-cielo-de-la-vera-58420722',
    },
  ];
  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.rutasService.getRutas().subscribe((res: any) => {
      const rutasBackend = res.filter(
        (ruta: any) => ruta.zona === 'laVera', // 👈 CLAVE
      );

      // 🔥 UNIMOS TODO
      this.rutas = [...this.rutasLocales, ...rutasBackend];
    });
  }
}
