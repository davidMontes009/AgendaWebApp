import { Component } from '@angular/core';
import { AgendaService } from './services/agenda.services';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { ContactoModel } from './models/contacto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AgendaService]
})

export class AppComponent {
  title = 'AgendaWebApp';
 

  constructor(private _route:ActivatedRoute 
              ,private _router:Router 
              ,private _objAgendaService:AgendaService
  ){ 
      
      
  }


  

}
