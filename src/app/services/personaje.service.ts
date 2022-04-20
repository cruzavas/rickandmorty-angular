import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {
  url = 'https://rickandmortyapi.com/api';
  // url = 'https://gorest.co.in/public/v2/users?access-token=';
  // token = 'f35519c38524fbbd0f3d21e7adac6f28d25f6758f1147b910b4256cb092f3812';

  constructor(private http: HttpClient) { }

  getpersonajes(): Observable<any> {
    return this.http.get<any>(this.url + '/character');
  }

  getpersonaje(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/character/' + id);
  }

  getpersonajesByPage(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/character/?page=' + id);
  }
}
