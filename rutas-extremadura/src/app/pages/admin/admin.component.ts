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
    switch (tipo) {
      case 'solo_ida':
        return 'Solo Ida';
      case 'ida_vuelta':
        return 'Ida y Vuelta';
      case 'circular':
        return 'Circular';
      default:
        return tipo;
    }
  }
  formatearDificultad(dif: string): string {
    switch (dif) {
      case 'facil':
        return 'Fácil';
      case 'media':
        return 'Media';
      case 'dificil':
        return 'Difícil';
      default:
        return dif;
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
