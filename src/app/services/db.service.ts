import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private sqlite: SQLite) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('FSR: BASE DE DATOS OK');
      db.executeSql('CREATE TABLE IF NOT EXISTS PERSONA(CORREO VARCHAR(15), '
        + 'CONTRASENA VARCHAR(30))', []).then(() => {
          console.log('FSR: TABLA CREADA OK');
        }).catch(e => {
          console.log('FSR: TABLA CREADA NOK ' + JSON.stringify(e));
        })
    }).catch(e => {
      console.log('FSR: BASE DE DATOS NOK'); 
    });
  }

  //MÉTODO QUE ALMACENA DATOS
  almacenarDatos(correo,contrasena) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('FSR: BASE DE DATOS OK');
      db.executeSql('INSERT INTO PERSONA VALUES(?,?)', [correo,contrasena]).then(() => {
          console.log('FSR: DATOS INSERTADOS OK');
        }).catch(e => {
          console.log('FSR: DATOS INSERTADOS NOK ' + JSON.stringify(e));
        })
    }).catch(e => {
      console.log('FSR: BASE DE DATOS NOK'); 
    });
  }

  modificarContrasena(correo,contrasena) {
    this.sqlite.create({
      name: 'datos.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('FSR: BASE DE DATOS OK');
      db.executeSql('UPDATE PERSONA VALUES(?,?)', [correo,contrasena]).then(() => {
          console.log('FSR: DATOS MODIFICADOS OK');
        }).catch(e => {
          console.log('FSR: DATOS MODIFICADOS NOK NOK ' + JSON.stringify(e));
        })
    }).catch(e => {
      console.log('FSR: BASE DE DATOS NOK'); 
    });
  }
}