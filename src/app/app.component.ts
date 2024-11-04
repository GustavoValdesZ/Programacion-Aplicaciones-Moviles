import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController, private router: Router) {}

  cerrarSesion(){
    console.log('Sesión Cerrada');
    this.menu.close('MyMenu');
    this.router.navigate(['/login']);
  }
}