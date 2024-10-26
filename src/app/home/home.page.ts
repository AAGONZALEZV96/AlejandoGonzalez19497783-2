import { Component, OnInit } from '@angular/core';
import { ApidatosService } from '../service/apidatos.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  datos: any = []

  constructor(
    private apidatosService: ApidatosService
  ) { }

  ngOnInit() {

    const informacion = localStorage.getItem('datos');
    if (informacion) {
      this.datos = JSON.parse(informacion)
      console.log('Datos obtenidos desde LocalStorage')
    } else {

      this.apidatosService.obtenerDatos().subscribe((informacion) => {
        console.log(informacion);
        console.log('Datos obtenidos de la API')
        this.datos = informacion
        localStorage.setItem('datos', JSON.stringify(this.datos))
      }

      );
    }

  }

}
