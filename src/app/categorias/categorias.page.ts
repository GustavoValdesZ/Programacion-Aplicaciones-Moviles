import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  categorias = [
    { nombre: 'Acción', imagen: 'assets/images/accion.jpg' },
    { nombre: 'Aventura', imagen: 'assets/images/aventura.jpg' },
    { nombre: 'Deportes', imagen: 'assets/images/deportes.jpg' },
    { nombre: 'Shooter', imagen: 'assets/images/shooter.jpg' },
    { nombre: 'Terror', imagen: 'assets/images/terror.jpg' }
  ];

  constructor(private menu: MenuController) {}

  ngOnInit() {
    this.menu.close('myMenu');
  }
}
