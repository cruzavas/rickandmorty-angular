import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  id = 0;
  name = '';
  specie = '';
  status = '';
  gender = '';
  urlImg = '';
  loading = true;

  constructor(private aRoute: ActivatedRoute,
    private personajeService: PersonajeService) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.getpersonaje();
  }

  getpersonaje(): void {
    this.personajeService.getpersonaje(this.id).subscribe(data => {
      this.name = data.name;
      this.specie = data.species;
      this.status = data.status;
      this.gender = data.gender;
      this.urlImg = data.image;
      this.loading = false;
    });
  }
}
