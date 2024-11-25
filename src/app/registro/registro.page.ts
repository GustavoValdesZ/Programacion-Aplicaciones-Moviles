import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { AuthServiceService } from '../services/auth-service.service'; // Importar el servicio de autenticación

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
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

  ngOnInit() {
    // Verifica que la base de datos esté lista antes de permitir el registro
    if (!this.authService.dbReady) {
      console.error('La base de datos no está lista');
      this.mostrarAlerta('La base de datos no está disponible, por favor intente más tarde.');
    }
  }

  async onSubmit() {
    // Verifica si la base de datos está lista antes de proceder con el registro
    if (!this.authService.dbReady) {
      this.mostrarAlerta('La base de datos no está lista. Intente más tarde.');
      return;
    }

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

      // Limpia los campos del formulario después del registro
      this.resetFormulario();
    } catch (error) {
      console.error('Error en el registro:', error);
      this.mostrarAlerta('Ocurrió un error al registrar el usuario. Puede que el nombre de usuario ya exista.');
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

  private resetFormulario() {
    this.registro = {
      nombre: '',
      apellido: '',
      usuario: '',
      contrasena: '',
      nivelEducacion: '',
      fechaNacimiento: '',
    };
  }
}
