import { Component, OnInit } from '@angular/core';

import { TokenService } from 'src/app/services/token.service'
import { AboutMeService } from 'src/app/services/about-me.service';
import { AboutMe } from 'src/app/model/about-me';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  //
  //pers:persona = new persona("","","");
  about: AboutMe[] = [];

  constructor(private aboutMeService: AboutMeService, private tokenService: TokenService) { }
  
  isLogged = false;

  ngOnInit(): void {
    this.cargarAboutMe();
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarAboutMe():void{
    this.aboutMeService.lista().subscribe(data => {this.about = data;});
  }
}
