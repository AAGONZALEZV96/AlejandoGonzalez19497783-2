import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface Datos {
  userId: number
  id: number
  title: string
  body: string
}

@Injectable({
  providedIn: 'root'
})
export class ApidatosService {

  private url = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatos():Observable<Datos[]>{
    return this.http.get<Datos[]>(this.url)
  }
}
