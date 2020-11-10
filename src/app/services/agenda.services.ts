import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http'; 
import {GLOBAL} from './global';
import 'rxjs/add/operator/map'; 
import {Observable} from 'rxjs/observable'; 
import { ContactoModel } from '../models/contacto.model';

const headers = new Headers({
    'accept': 'application/json',
    'Content-Type': 'application/json'
    ,'Access-Control-Allow-Origin':'*'
 });

  @Injectable({
    providedIn: 'root'
  })

  export class AgendaService {
  
    constructor(private _http:Http) { 

    }
  
    /* Consulta los contactos existentes */
    GetAllContacts(){
      let endPoint = GLOBAL.url + GLOBAL.EndPoints.ConsultaContacto; 
      return this._http.get(endPoint).map(resp => resp.json());
    }

    /* Consulta los tipos de telefonos*/
    GetAllCategoryPhone(){
      let endPoint = GLOBAL.url + GLOBAL.EndPoints.ConsultaCategoriaTelefono;
      return this._http.get(endPoint).map(resp => resp.json());
    }
  
    //Servicio para registrar un contacto 
    InsertContact(contacto:ContactoModel) {
        let params = JSON.stringify(contacto);
      let endPoint:string  = GLOBAL.EndPoints.RegistraContacto;
        return this._http.post(endPoint
                              ,params
                              ,{headers}).map(result => result.json());
     
    }

    //Servicio para actualizar informacion de un contacto 
    UpdateContact(contacto:ContactoModel) {
        let params = JSON.stringify(contacto);
      let endPoint:string  = GLOBAL.EndPoints.ActualizaContacto;
        return this._http.put(endPoint
                              ,params
                              ,{headers}).map(result => result.json());
     
    }

    ///Servicio para eliminar un 
    DeleteContact(idContacto:number) {
      let endPoint:string  = GLOBAL.EndPoints.EliminaContacto + idContacto;
        return this._http.delete(endPoint
                              ,null).map(result => result.json());
     
    }
  
  }
  