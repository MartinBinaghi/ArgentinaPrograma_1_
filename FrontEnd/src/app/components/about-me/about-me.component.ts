import { Component, OnInit } from '@angular/core';

import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service'
import { Persona } from 'src/app/model/persona.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  persona: Persona[] = [];
  //pers:persona = new persona("","","");

  constructor(private personaService: PersonaService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarPersona():void{
    this.personaService.lista().subscribe(data => {this.persona = data;});
  }
}
