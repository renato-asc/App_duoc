import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import{ Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  texto: string = '';
  ruta: string ='';

  constructor(private router: Router, private scanner : BarcodeScanner ) {}

  ngOnInit() {
  }

  salir() {
        this.router.navigate(['login']);
  }

  async tomarFoto(){
    const imagen = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

    this.ruta = imagen.webPath;
  }
  
  leerQR(){
    this.scanner.scan().then(data => {
     this.texto= data ['text'];
    });
}
  
}
