import { Component, OnInit } from '@angular/core';

import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educ: Educacion[] = [];
  
  constructor(private sEducacion: SEducacionService, private tokenService: TokenService) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onDelete(id?: number){
    if(id != undefined){
      this.sEducacion.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("Error al eliminar educacion");
        }
      );
    }
  }

  cargarEducacion():void{
    this.sEducacion.lista().subscribe(data => {this.educ = data;});
  }
}
