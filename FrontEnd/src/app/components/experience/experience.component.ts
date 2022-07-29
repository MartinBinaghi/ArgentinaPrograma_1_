import { Component, OnInit } from '@angular/core';

import { Experiencia } from 'src/app/model/experiencia';
import { TokenService } from 'src/app/services/token.service';
import { SExperienciaService } from '../../services/s-experiencia.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  expe: Experiencia[] = [];
  
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
  
  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onDelete(id?: number){
    if(id != undefined){
      this.sExperiencia.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("Error al eliminar experiencia");
        }
      );
    }
  }

  cargarExperiencia():void{
    this.sExperiencia.lista().subscribe(data => {this.expe = data;});
  }
}

