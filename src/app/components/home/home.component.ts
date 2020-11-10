import { Component, OnInit } from '@angular/core';
import { AgendaService } from '../../services/agenda.services';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { ContactoModel } from '../../models/contacto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  objContacto:ContactoModel;
  listContacto:ContactoModel[] = null;

  constructor(private _route:ActivatedRoute 
    ,private _router:Router 
    ,private _objAgendaService:AgendaService
){ 
this.objContacto = new ContactoModel(null,null,null,null,null,null,null)
this.GetContacts();
}

  ngOnInit(): void {
  }

  //Consulta contactos
  GetContacts(){
    this._objAgendaService.GetAllContacts().subscribe(
      response =>{
        console.log(response);
        this.listContacto = response.listContacto;
        console.log(this.listContacto);
    },
    error =>{
        console.log(<any>error);
      }
    );
  }

  //Consulta contactos
  RegistraContacto(){
    this._objAgendaService.InsertContact(this.objContacto).subscribe(
      response =>{
        console.log(response);  
    },
    error =>{
        console.log(<any>error);
      }
    );
  }

}
