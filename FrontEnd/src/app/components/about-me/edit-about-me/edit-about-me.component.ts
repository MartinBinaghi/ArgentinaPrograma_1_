import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-edit-about-me',
  templateUrl: './edit-about-me.component.html',
  styleUrls: ['./edit-about-me.component.css']
})
export class EditAboutMeComponent implements OnInit {
  //persona: persona = null;
  about: AboutMe = null;

  constructor(
    private aboutMeService: AboutMeService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.aboutMeService.detail(id).subscribe(
      (data) => {
        this.about = data;
      },
      (err) => {
        alert('Error al editar about me 1');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    
    this.aboutMeService.update(id, this.about).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al editar about me 2');
        this.router.navigate(['']);
      },
    });
  }

}
