import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';

  constructor(private navCTRL: NavController) { }

  ngOnInit() {
  }

  login() {
    this.navCTRL.navigateForward(['/home'], {
      queryParams: {
        usuario: this.usuario,
        password: this.password,
      }
    });
  }
}
