import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { TokenService } from 'src/app/services/token.service';
import { SHabilidadService } from '../../services/s-habilidad.service';

@Component({
  selector: 'app-hs-skills',
  templateUrl: './hs-skills.component.html',
  styleUrls: ['./hs-skills.component.css']
})
export class HsSkillsComponent implements OnInit {
  habilidad: Habilidad[] = [];

  constructor(private sHabilidad: SHabilidadService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onDelete(id?: number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("Error al eliminar habilidad");
        }
      );
    }
  }

  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(data => {this.habilidad = data;});
  }
}
