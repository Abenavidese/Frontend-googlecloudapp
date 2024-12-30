import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  
  private apiUrl = 'http://130.211.239.214:3000/api/usuarios'; // IP pública del backend
  constructor(private http: HttpClient) {}

  // Crear usuario con archivo
  createUsuario(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, formData);
  }

  // Descargar archivo asociado al usuario
  downloadFile(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/download/${id}`, {
      responseType: 'blob',
    });
  }
}
