import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private navCTRL: NavController, private alertController: AlertController) {}

  ngOnInit() {}

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK'],
    });
    await alert.present();
  }

  login() {
    // Validar el usuario
    if (!this.validarUsuario(this.usuario)) {
      this.mostrarAlerta('El usuario debe tener entre 3 y 8 caracteres alfanuméricos.');
      return;
    }

    // Validar la contraseña
    if (!this.password) {
      this.mostrarAlerta('La contraseña no puede estar vacía.');
      return;
    }

    if (!this.validarPassword(this.password)) {
      this.mostrarAlerta('La contraseña debe ser de 4 dígitos numéricos.');
      return;
    }

    // Si las validaciones son exitosas, navegar a la página de inicio
    this.navCTRL.navigateForward(['/home'], {
      queryParams: {
        usuario: this.usuario,
        password: this.password,
      },
    });
  }

  // Método para validar el usuario
  private validarUsuario(usuario: string): boolean {
    const pattern = /^[a-zA-Z0-9]{3,8}$/;
    return pattern.test(usuario);
  }

  // Método para validar la contraseña
  private validarPassword(password: string): boolean {
    const pattern = /^\d{4}$/; // Debe ser un número de 4 dígitos
    return pattern.test(password);
  }
}