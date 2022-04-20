import { Component, OnInit } from '@angular/core';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.css']
})
export class ListPersonajesComponent implements OnInit {
  listPersonajes: any[] = [];
  loading = true;
  next = 0;
  prev = 0;
  constructor(private personajeService: PersonajeService) { }

  ngOnInit(): void {
    this.getpersonajes();
  }

  getpersonajes(): void {
    this.personajeService.getpersonajes().subscribe(data => {
      this.prev = data.info.prev?.split('=')[1];
      this.next = data.info.next?.split('=')[1];
      this.listPersonajes = data.results;
      this.loading = false;
    });
  }

  getNextpersonajes(): void {
    this.personajesByPage(this.next);
  }

  getPrevpersonajes(): void {
    this.personajesByPage(this.prev);
  }

  personajesByPage(id: number): void {
    this.loading = true;
    this.personajeService.getpersonajesByPage(id).subscribe(data => {
      this.prev = data.info.prev?.split('=')[1];
      this.next = data.info.next?.split('=')[1];
      this.listPersonajes = data.results;
      this.loading = false;
    });
  }
}
