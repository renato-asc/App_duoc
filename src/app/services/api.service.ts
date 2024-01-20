import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rutaBase: string = 'http://fer-sepulveda.cl/api/api-prueba2.php';

  constructor(private router: Router, private http: HttpClient) { }

  login(correo, contrasena) {
    return this.http.get(this.rutaBase +
    '?nombreFuncion=UsuarioLogin&usuario='
    + correo + "&contrasena=" + contrasena);
  }

  almacenarUsuario(correo, contrasena) {
    return this.http.post(this.rutaBase, {nombreFuncion: 'UsuarioAlmacenar', 
      parametros: [correo, contrasena]});
  }
  
  modificarContrasena(correo,contrasena){
    return this.http.put(this.rutaBase, { nombreFuncion: "UsuarioModificarContrasena", parametros: { usuario: correo, contrasena: contrasena} });
  }


//   canActivate(correo, contrasena) {
//     this.login(correo, contrasena).subscribe(data => {
//       console.log(data);
//       if(data['result'] === 'LOGIN OK') {
//         this.router.navigate(['principal']);
//       } else {
//         this.router.navigate(['principal']);
//       }
//     });
//     }

// }

  //PETICIÓN GET: UTILIZADA PARA OBTENER INFORMACIÓN
  //PETICIÓN POST: UTILIZADA PARA INSERTAR INFORMACIÓN
  //PETICIÓN DELETE: UTILIZADA PARA ELIMINAR INFORMACIÓN
  //PETICIÓN PUT: UTILIZADA PARA MODIFICAR INFORMACIÓN

}
