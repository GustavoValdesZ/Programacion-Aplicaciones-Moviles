import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service'; // importar desde service/auth-service

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
    fechaNacimiento: '',
  };

  constructor(
    private alertCtrl: AlertController,
    private menu: MenuController,
    private authService: AuthServiceService // Inyecta el servicio aquí
  ) {
    // Cierra el menú al inicializar el componente
    this.menu.close('myMenu');
  }

  async onSubmit() {
    // Validaciones
    if (!this.registro.nombre) {
      this.mostrarAlerta('El nombre no puede estar vacío.');
      return;
    }

    if (!this.registro.apellido) {
      this.mostrarAlerta('El apellido no puede estar vacío.');
      return;
    }

    if (!this.validarUsuario(this.registro.usuario)) {
      this.mostrarAlerta(
        'El usuario debe tener entre 3 y 8 caracteres alfanuméricos.'
      );
      return;
    }

    if (!this.registro.contrasena) {
      this.mostrarAlerta('La contraseña no puede estar vacía.');
      return;
    }

    if (!this.registro.nivelEducacion) {
      this.mostrarAlerta('El nivel de educación no puede estar vacío.');
      return;
    }

    if (!this.registro.fechaNacimiento) {
      this.mostrarAlerta('La fecha de nacimiento no puede estar vacía.');
      return;
    }

    // Llama al servicio para registrar al usuario
    try {
      await this.authService.registerUser(
        this.registro.nombre,
        this.registro.apellido,
        this.registro.usuario,
        this.registro.contrasena,
        this.registro.nivelEducacion,
        this.registro.fechaNacimiento
      );

      // Muestra mensaje de éxito
      const alert = await this.alertCtrl.create({
        header: 'Registro Exitoso',
        message: `El usuario ${this.registro.usuario} ha sido registrado con éxito.`,
        buttons: ['OK'],
      });
      await alert.present();
    } catch (error) {
      console.error('Error en el registro:', error);
      this.mostrarAlerta('Ocurrió un error al registrar el usuario.');
    }
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
