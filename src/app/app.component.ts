import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  // Método para cerrar el menú y navegar a una página específica
  navigateAndCloseMenu(route: string) {
    this.menu.close(); // Cierra el menú
    this.router.navigate([route]); // Navega a la página indicada
  }

  cerrarSesion() {
    console.log('Sesión Cerrada');
    localStorage.removeItem('usuario'); // Elimina el usuario del localStorage
    this.navigateAndCloseMenu('/login'); // Cierra el menú y redirige a login
  }
}
