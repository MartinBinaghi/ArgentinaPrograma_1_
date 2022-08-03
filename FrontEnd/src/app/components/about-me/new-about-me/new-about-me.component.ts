import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from '../../../services/persona.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  nombre: string = '';
  apellido: string = '';
  img: string = '';

  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const pers = new Persona(this.nombre, this.apellido, this.img);
    this.personaService.save(pers).subscribe(data => {
      alert('Persona añadida correctamente');
      this.router.navigate(['']);
    }, err => {
      alert('Error al añadir persona')
      this.router.navigate(['newpers']);
    });
  }
}


