import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from '../../../services/s-habilidad.service';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {

  porcentajeS: number = 0;
  tituloS: string = '';

  constructor(private sHabilidad: SHabilidadService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const habilidad = new Habilidad(this.porcentajeS, this.tituloS);
    this.sHabilidad.save(habilidad).subscribe(data => {
      alert('Habilidad añadida correctamente');
      this.router.navigate(['']);
    }, err => {
      alert('Error al añadir habilidad')
      this.router.navigate(['newskill']);
    });
  }

}
