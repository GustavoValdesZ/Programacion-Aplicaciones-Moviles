// footer.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router para la navegación

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

  constructor(private router: Router) {}

  // Método para redirigir a la página de Home
  goToHome() {
    this.router.navigate(['/home']);
  }

  // Método para redirigir a la página de Login
  goToLogin() {
    this.router.navigate(['/login']);
  }

  // Método para redirigir a la página de Categorías
  goToCategorias() {
    this.router.navigate(['/categorias']);
  }
}
