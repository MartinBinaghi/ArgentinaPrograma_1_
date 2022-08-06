import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/services/s-educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  educacion__open: boolean = true;
  tituloEd: string = '';
  subtituloEd: string = '';
  descripcionEd: string = '';
  imgEd: string = '';

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educ = new Educacion(this.tituloEd, this.subtituloEd, this.descripcionEd, this.imgEd, this.educacion__open);
    this.sEducacion.save(educ).subscribe(data => {
      alert('Educacion añadida correctamente');
      this.router.navigate(['']);
    }, err => {
      alert('Error al añadir educacion')
      this.router.navigate(['newedu']);
    });
  }

}
