import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { ToastController, AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  mdl_correo: string = '';
  mdl_contrasena: string = '';

  constructor(private api: ApiService, private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private db: DbService
    ) { }

  ngOnInit() {
  }

  fusion(){
    this.ingresar();
    this.almacenarDatos();
  }

  salir(){
    this.router.navigate(['login']);
  }

  ingresar() {
    this.api.almacenarUsuario(this.mdl_correo, this.mdl_contrasena).subscribe(data => {
      console.log(data);

      if(data['result'] === 'USUARIO ALMACENADO CORRECTAMENTE') {
        this.router.navigate(['login']);
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

  almacenarDatos() {
    this.db.almacenarDatos(this.mdl_correo, this.mdl_contrasena);
  }


}
