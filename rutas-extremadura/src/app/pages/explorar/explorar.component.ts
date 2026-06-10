import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RutasService } from '../../shared/rutas.service';
import { Ruta } from '../../interface/ruta'; // Usamos la interfaz que creamos en el paso anterior

// Mantenemos el tipo ExploreItem solo para el carrusel estático de arriba
type ExploreItem = {
  title: string;
  description: string;
  route: string;
  image: string;
  cta: string;
};

@Component({
  selector: 'app-explorar',
  imports: [RouterLink, CommonModule],
  templateUrl: './explorar.component.html',
  styleUrl: './explorar.component.css',
})
export class ExplorarComponent implements OnInit {
  formatearZona(zona: string): string {
    if (!zona) return '';

    switch (zona) {
      // CÁCERES
      case 'alagon':
        return 'Valle del Alagón';
      case 'los-ibores':
        return 'Los Ibores';
      case 'sierra-de-gata':
        return 'Sierra de Gata';
      case 'las-hurdes':
        return 'Las Hurdes';
      case 'ambroz':
        return 'Valle del Ambroz';
      case 'el-jerte':
        return 'Valle del Jerte';
      case 'la-vera':
        return 'La Vera';
      case 'campo-aranuelo':
        return 'Campo Arañuelo';
      case 'las-villuercas':
        return 'Las Villuercas';
      case 'trujillo':
        return 'Trujillo';
      case 'caceres':
        return 'Cáceres';
      case 'alcantara':
        return 'Alcántara';
      case 'valencia-de-alcantara':
        return 'Valencia de Alcántara';

      // BADAJOZ
      case 'la-siberia':
        return 'La Siberia';
      case 'la-serena':
        return 'La Serena';
      case 'don-benito':
        return 'Don Benito';
      case 'merida':
        return 'Mérida';
      case 'tierra-de-barros':
        return 'Tierra de Barros';
      case 'campina-sur':
        return 'Campiña Sur';
      case 'jerez-de-los-caballeros':
        return 'Jerez de los Caballeros';
      case 'olivenza':
        return 'Olivenza';
      case 'tentudia':
        return 'Tentudía';
      case 'badajoz':
        return 'Badajoz';
      case 'alburquerque':
        return 'Alburquerque';

      default:
        return zona;
    }
  }
  // El carrusel de arriba se queda igual con las zonas/planes fijos
  readonly planPool: ExploreItem[] = [
    {
      title: 'Planes de agua y sombra',
      description:
        'Gargantas y zonas frescas para rutas cómodas en días cálidos.',
      route: '/laVera',
      image: 'images/vera/sendero-del-tietar.jpg',
      cta: 'Explorar La Vera',
    },
    {
      title: 'Paisaje de montaña',
      description: 'Bosques, miradores y senderos para caminar con calma.',
      route: '/sierraDeGata',
      image: 'images/sierra-de-gata/jalama.jpg',
      cta: 'Ver Sierra de Gata',
    },
    {
      title: 'Ruta con patrimonio',
      description:
        'Combina historia, plazas y recorridos con mucho contexto local.',
      route: '/trujillo',
      image: 'images/trujillo/casco-historico.jpg',
      cta: 'Descubrir Trujillo',
    },
    {
      title: 'Escapada para desconectar',
      description: 'Llanuras abiertas y rutas suaves para ir sin prisas.',
      route: '/laSerena',
      image: 'images/la-serena/mirador-de-la-sierra.jpg',
      cta: 'Ir a La Serena',
    },
    {
      title: 'Plan de embalses y naturaleza',
      description: 'Recorridos con agua, avistamiento y parajes tranquilos.',
      route: '/laSiberia',
      image: 'images/la-siberia/sendero-orellana.jpg',
      cta: 'Ver La Siberia',
    },
    {
      title: 'Historia romana y paseo',
      description: 'Un plan cultural con espacios abiertos y rutas urbanas.',
      route: '/merida',
      image: 'images/merida/monumentaldos.jpg',
      cta: 'Descubrir Mérida',
    },
  ];

  // AQUÍ CAMBIA: Ahora este array guardará objetos de tipo 'Ruta' reales del backend
  randomRecommendations: Ruta[] = [];

  // Inyectamos el servicio de rutas en el constructor
  constructor(private rutasService: RutasService) {}

  ngOnInit(): void {
    // Llamamos al backend para obtener todas las rutas reales
    this.rutasService.getRutas().subscribe({
      next: (rutas: Ruta[]) => {
        // Barajamos todas las rutas que vinieron de la base de datos y elegimos 8
        this.randomRecommendations = this.getShuffledItems(rutas, 8);
      },
      error: (err) => {
        console.error(
          'Error al cargar las rutas para las recomendaciones:',
          err,
        );
      },
    });
  }

  // Función genérica para barajar arrays (Sirve tanto para Ruta[] como para ExploreItem[])
  private getShuffledItems<T>(items: T[], count: number): T[] {
    const shuffled = [...items];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  }
}
