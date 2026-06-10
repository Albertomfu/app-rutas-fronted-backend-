import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RutasService } from '../../services/rutas.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  rutas: any[] = [];

  nuevaRuta: any = {
    nombre: '',
    zona: '',
    descripcion: '',
    salida: '',
    llegada: '',
    km: '',
    duracion: '',
    dificultad: '',
    tipo: '',
    imagen: '',
    maps: '',
    wikiloc: '',
  };

  editando: boolean = false;
  rutaEditandoId: string = '';

  constructor(private rutasService: RutasService) {}

  ngOnInit() {
    this.cargarRutas();
  }

  cargarRutas() {
    this.rutasService.getRutas().subscribe((res: any) => {
      this.rutas = res;
    });
  }

  guardarRuta() {
    console.log('RUTA QUE ENVÍO:', this.nuevaRuta); // 👈

    if (this.editando) {
      this.rutasService
        .updateRuta(this.rutaEditandoId, this.nuevaRuta)
        .subscribe(() => {
          this.resetForm();
          this.cargarRutas();
        });
    } else {
      this.rutasService.addRuta(this.nuevaRuta).subscribe(() => {
        this.resetForm();
        this.cargarRutas();
      });
    }
  }

  editarRuta(ruta: any) {
    this.nuevaRuta = { ...ruta };
    this.rutaEditandoId = ruta._id;
    this.editando = true;
  }

  eliminarRuta(id: string) {
    if (confirm('¿Eliminar ruta?')) {
      this.rutasService.deleteRuta(id).subscribe(() => this.cargarRutas());
    }
  }

  resetForm() {
    this.nuevaRuta = {
      nombre: '',
      zona: '',
      descripcion: '',
      salida: '',
      llegada: '',
      km: '',
      duracion: '',
      dificultad: '',
      tipo: '',
      imagen: '',
      maps: '',
      wikiloc: '',
    };

    this.editando = false;
    this.rutaEditandoId = '';
  }
  formatearTipo(tipo: string): string {
    if (!tipo) return '';
    switch (
      tipo.toLowerCase().replace(' ', '_') // Convierte "Solo Ida" a "solo_ida" internamente para el switch
    ) {
      case 'solo_ida':
      case 'solo ida':
        return 'Solo Ida';
      case 'ida_vuelta':
      case 'ida y vuelta':
        return 'Ida y Vuelta';
      case 'circular':
        return 'Circular';
      case 'alcantara':
        return 'Alcantara';
      default:
        return tipo;
    }
  }

  formatearDificultad(dif: string): string {
    if (!dif) return '';
    switch (dif.toLowerCase()) {
      case 'facil':
      case 'fácil':
        return 'Fácil';
      case 'media':
        return 'Media';
      case 'dificil':
      case 'difícil':
        return 'Difícil';
      default:
        return dif;
    }
  }
  formatearZona(zona: string): string {
    if (!zona) return '';

    switch (zona) {
      // CÁCERES
      case 'alagon':
        return 'Valle del Alagón';
      case 'losIbores':
        return 'Los Ibores';
      case 'sierraDeGata':
        return 'Sierra de Gata';
      case 'lasHurdes':
        return 'Las Hurdes';
      case 'ambroz':
        return 'Valle del Ambroz';
      case 'elJerte':
        return 'Valle del Jerte';
      case 'laVera':
        return 'La Vera';
      case 'campoAranuelo':
        return 'Campo Arañuelo';
      case 'lasVilluercas':
        return 'Las Villuercas';
      case 'trujillo':
        return 'Trujillo';
      case 'caceres':
        return 'Cáceres';
      case 'alcantara':
        return 'Alcántara'; // 👈 Tu traducción aquí
      case 'valenciaDeAlcantara':
        return 'Valencia de Alcántara';

      // BADAJOZ
      case 'laSiberia':
        return 'La Siberia';
      case 'laSerena':
        return 'La Serena';
      case 'donBenito':
        return 'Don Benito';
      case 'merida':
        return 'Mérida';
      case 'tierraDeBarros':
        return 'Tierra de Barros';
      case 'campinaSur':
        return 'Campiña Sur';
      case 'jerezDeLosCaballeros':
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
        // Si por algún motivo guardas el nombre bonito directamente, lo devuelve tal cual
        return zona;
    }
  }
  selectedFile: File | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      this.selectedFile = file;

      const reader = new FileReader();

      reader.onload = () => {
        this.nuevaRuta.imagen = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
