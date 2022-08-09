import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from '../../../services/s-habilidad.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  habilidad: Habilidad = null;

  constructor(
    private sHabilidad: SHabilidadService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      (data) => {
        this.habilidad = data;
      },
      (err) => {
        alert('Error al editar habilidad');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    console.log(this.habilidad);
    this.sHabilidad.update(id, this.habilidad).subscribe({
      next: (data) => {
        alert('Habilidad actualizada correctamente');
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al editar habilidad');
        this.router.navigate(['/editskill/' + id]);
      },
    });
  }

}
