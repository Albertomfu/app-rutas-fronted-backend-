import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RutasService {
  private apiUrl = 'http://localhost:5000/rutas';

  constructor(private http: HttpClient) {}

  getRutas() {
    return this.http.get(this.apiUrl);
  }

  addRuta(ruta: any) {
    return this.http.post(this.apiUrl, ruta);
  }

  deleteRuta(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
