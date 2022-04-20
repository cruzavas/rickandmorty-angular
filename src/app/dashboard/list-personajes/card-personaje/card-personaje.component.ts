import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent implements OnInit {
  @Input() user: any;
  imgUrl = '';
  firstName = '';
  email = '';
  id = 0;

  constructor() { }

  ngOnInit(): void {
    this.firstName = this.user.name;
    this.email = this.user.species;
    // console.log(this.user);
    this.imgUrl = this.user.image;
    this.id = this.user.id;
  }
  
}
