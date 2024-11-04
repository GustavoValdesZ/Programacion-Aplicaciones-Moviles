import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  registro = {
    nombre: '',
    apellido: '',
    usuario: '',
    contrasena: '',
    nivelEducacion: '',
    fechaNacimiento: ''
  };

  constructor(private alertCtrl: AlertController, private menu: MenuController) {
    // Cierra el menú al inicializar el componente
    this.menu.close('myMenu');
  }

  async onSubmit() {
    // Validar el nombre
    if (!this.registro.nombre) {
      this.mostrarAlerta('El nombre no puede estar vacío.');
      return;
    }

    // Validar el apellido
    if (!this.registro.apellido) {
      this.mostrarAlerta('El apellido no puede estar vacío.');
      return;
    }

    // Validar el usuario
    if (!this.validarUsuario(this.registro.usuario)) {
      this.mostrarAlerta('El usuario debe tener entre 3 y 8 caracteres alfanuméricos.');
      return;
    }

    // Validar la contraseña
    if (!this.registro.contrasena) {
      this.mostrarAlerta('La contraseña no puede estar vacía.');
      return;
    }

    // Validar nivel de educación
    if (!this.registro.nivelEducacion) {
      this.mostrarAlerta('El nivel de educación no puede estar vacío.');
      return;
    }

    // Validar la fecha de nacimiento
    if (!this.registro.fechaNacimiento) {
      this.mostrarAlerta('La fecha de nacimiento no puede estar vacía.');
      return;
    }

    // Si todas las validaciones son exitosas
    const alert = await this.alertCtrl.create({
      header: 'Registro Exitoso',
      message: `Nombre: ${this.registro.nombre}
                 Apellido: ${this.registro.apellido}
                 Usuario: ${this.registro.usuario}
                 Nivel de Educación: ${this.registro.nivelEducacion}
                 Fecha de Nacimiento: ${this.registro.fechaNacimiento}`,
      buttons: ['OK']
    });
    await alert.present();
  }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  private validarUsuario(usuario: string): boolean {
    const pattern = /^[a-zA-Z0-9]{3,8}$/;
    return pattern.test(usuario);
  }
}
