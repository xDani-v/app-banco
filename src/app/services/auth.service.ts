import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/cliente'; // Reemplaza con la URL de tu API de autenticación
  private auth = false;

  constructor(private http: HttpClient) { }

  login(numeroIdentificacion: string, password: string): Observable<any> {
    const body = {
      numero_identificacion: numeroIdentificacion,
      password: password,
    };

    // Realizar una solicitud POST a la ruta de autenticación en tu API
    return this.http.post(`${this.apiUrl}/authenticate`, body).pipe(
      // Manejo de la respuesta
      tap((response) => {
        if (response) {
          // Autenticación exitosa, establecer el estado de autenticación como true
          this.auth = true;
        }
      })
    );
  }

  logout(): void {
    // Implementa aquí la lógica de cierre de sesión, si es necesario
    this.auth = false;
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.auth;
  }

  // Método para establecer el estado de autenticación
  setAuthenticated(isAuthenticated: boolean): void {
    this.auth = isAuthenticated;
  }
}
