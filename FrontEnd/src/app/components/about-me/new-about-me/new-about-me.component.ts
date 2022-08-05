import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutMe } from 'src/app/model/about-me';
import { AboutMeService } from 'src/app/services/about-me.service';

@Component({
  selector: 'app-new-about-me',
  templateUrl: './new-about-me.component.html',
  styleUrls: ['./new-about-me.component.css']
})
export class NewAboutMeComponent implements OnInit {

  nombreA: string = '';
  titularA: string = '';
  descripcionA: string = '';
  imgA: string = '';

  constructor(private aboutMeService: AboutMeService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void {
    const pers = new AboutMe(this.nombreA, this.titularA, this.descripcionA, this.imgA);
    this.aboutMeService.save(pers).subscribe(data => {
      alert('Persona añadida correctamente');
      this.router.navigate(['']);
    }, err => {
      alert('Error al añadir persona')
      this.router.navigate(['newabt']);
    });
  }
}


