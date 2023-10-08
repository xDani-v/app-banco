import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service'; // Ajusta la ruta según la ubicación real del servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  numeroIdentificacion: any = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    // Llama al servicio de autenticación para intentar iniciar sesión
    this.authService.login(this.numeroIdentificacion, this.password)
      .subscribe((response) => {
        // Maneja la respuesta del servicio
        if (response && response.token) {
          // Si la autenticación es exitosa, puedes redirigir al usuario a la página de inicio o al panel de control
          // Por ejemplo, aquí redirigimos al usuario a la ruta '/dashboard'
          // Asegúrate de importar Router de '@angular/router' y de inyectarlo en el constructor
          this.router.navigate(['/dashboard']);
        } else {
          // Si la autenticación falla, muestra un mensaje de error al usuario
          alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
      });
  }
}
