import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  modeloUsuario: string = '';
  modeloContrasena: string = '';

  constructor(private api: ApiService, private router: Router,
    private toastController: ToastController,
    private alertController: AlertController) { }

  ngOnInit() {
  }

login() {
  this.api.login(this.modeloUsuario, this.modeloContrasena).subscribe(data => {
    console.log(data);
    if(data['result'] === 'LOGIN OK') {
      this.router.navigate(['principal']);
    } else {
      this.mostrarMensaje('Credenciales Inválidas');
    }
  });
}

async mostrarMensaje(mensaje) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000
  });
  toast.present();

 }

  reestablecer() {
    this.router.navigate(['reestablecer']);
      }
  
  registro() {
        this.router.navigate(['registro']);
  }
}