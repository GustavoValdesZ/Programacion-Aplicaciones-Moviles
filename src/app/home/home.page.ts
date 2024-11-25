import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: string = '';
  nombre: string = '';
  apellido: string = '';
  nivelEducacion: string = '';
  fechaNacimiento: string = '';

  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private menu: MenuController
  ) {
    // Cierra el menú al inicializar el componente
    this.menu.close('myMenu');
  }

  ngOnInit() {
    // Asegúrate de que el usuario esté definido
    this.usuario = localStorage.getItem('usuario') || 'Invitado';
  }

  limpiar() {
    this.nombre = '';
    this.apellido = '';
    this.nivelEducacion = '';
    this.fechaNacimiento = '';
  }

  async mostrar() {
    const alert = await this.alertCtrl.create({
      header: 'Información del Usuario',
      message: `
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Nivel de Educación: ${this.nivelEducacion}
        Fecha de Nacimiento: ${this.fechaNacimiento}
      `,
      buttons: ['OK']
    });
    await alert.present();
  }

  // Método de cerrar sesión
  cerrarSesion() {
    localStorage.removeItem('usuario');  // Elimina el usuario del localStorage
    this.menu.close();  // Cierra el menú
    this.alertCtrl.create({
      header: 'Sesión cerrada',
      message: 'Has cerrado sesión correctamente.',
      buttons: ['OK']
    }).then(alert => alert.present());
  }
}
