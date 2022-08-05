import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experience/edit-experiencia/edit-experiencia.component';

import { NewExperienciaComponent } from './components/experience/new-experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewEducacionComponent } from './components/education/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './components/education/edit-educacion/edit-educacion.component';
import { EditAboutMeComponent } from './components/about-me/edit-about-me/edit-about-me.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './components/projects/new-proyecto/new-proyecto.component';
import { NewAboutMeComponent } from './components/about-me/new-about-me/new-about-me.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newexp', component: NewExperienciaComponent},
  {path:'editexp/:id', component: EditExperienciaComponent},
  {path:'newedu', component: NewEducacionComponent},
  {path:'editedu/:id', component: EditEducacionComponent},
  {path:'newproyecto', component: NewProyectoComponent},
  {path:'editproyecto/:id', component: EditProyectoComponent},
  {path:'newabout', component: NewAboutMeComponent},
  {path:'editabout/:id', component: EditAboutMeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }