import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-reestablecer',
  templateUrl: './reestablecer.page.html',
  styleUrls: ['./reestablecer.page.scss'],
})
export class ReestablecerPage implements OnInit {
  
  modeloUsuario : string = '';
  modeloPassword : string = '';
  

  constructor(private router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
    private api: ApiService,
    private db: DbService) {}

  ngOnInit() {
  }

  fusion(){
    this.ingresar();
    this.modificarContrasena();
  }


  ingresar() {
    this.api.modificarContrasena(this.modeloUsuario, this.modeloPassword).subscribe(data => {
      console.log(data);

      if(data['result'] === 'OK') {
        this.router.navigate(['login']);
      } else {
        this.mostrarMensaje('Credenciales Inválidas');
      }
    });
  }

  modificarContrasena() {
    this.db.modificarContrasena(this.modeloUsuario, this.modeloPassword);
  }

  salir(){
    this.router.navigate(['login']);
  }


  async mostrarMensaje(mensaje) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}