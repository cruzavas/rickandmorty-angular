import { ComponentFixture, TestBed } from '@angular/core/testing';

import { personajeComponent } from './personaje.component';

describe('personajeComponent', () => {
  let component: personajeComponent;
  let fixture: ComponentFixture<personajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ personajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(personajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
