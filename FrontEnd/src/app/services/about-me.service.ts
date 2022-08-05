import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AboutMe } from '../model/about-me';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  abtURL = 'http://localhost:8080/aboutme/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<AboutMe[]>{
    return this.httpClient.get<AboutMe[]>(this.abtURL + 'lista');
  }

  public detail(id: number): Observable<AboutMe>{
    return this.httpClient.get<AboutMe>(this.abtURL + `detail/${id}`);
  }

  public save(aboutMe: AboutMe): Observable<any>{
    return this.httpClient.post<any>(this.abtURL + 'create', aboutMe);
  }

  public update(id: number, aboutMe: AboutMe): Observable<any>{
    return this.httpClient.put<any>(this.abtURL + `update/${id}`, aboutMe);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.abtURL + `delete/${id}`);
  }
}
