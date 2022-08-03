import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  //URL = 'http://localhost:8080/personas/';
  URL2 = 'http://localhost:8080/persona/';

  constructor(private http: HttpClient) { }

  //public getPersona(): Observable<persona>{
  //  return this.http.get<persona>(this.URL+ 'traer/perfil');
  //}

  public lista(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.URL2 + 'lista');
  }

  public detail(id: number): Observable<Persona>{
    return this.http.get<Persona>(this.URL2 + `detail/${id}`);
  }

  public save(persona: Persona): Observable<any>{
    return this.http.post<any>(this.URL2 + 'create', persona);
  }

  public update(id: number, persona: Persona): Observable<any>{
    return this.http.put<any>(this.URL2 + `update/${id}`, persona);
  }
}
