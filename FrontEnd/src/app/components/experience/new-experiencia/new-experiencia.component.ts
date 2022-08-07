import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

import { SExperienciaService } from '../../../services/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {

  experiencia__open: boolean = true;
  nombreE: string = '';
  subtituloE: string = '';
  descripcionE: string = '';
  imgE: string = '';

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE, this.subtituloE, this.descripcionE, this.imgE, this.experiencia__open);
    this.sExperiencia.save(expe).subscribe(data => {
      alert('Experiencia añadida correctamente');
      this.router.navigate(['']);
    }, err => {
      alert('Error al añadir experiencia')
      this.router.navigate(['newexp']);
    });
  }

}
