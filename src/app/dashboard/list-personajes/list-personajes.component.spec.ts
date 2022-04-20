import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonajesComponent } from './list-personajes.component';

describe('ListpersonajesComponent', () => {
  let component: ListpersonajesComponent;
  let fixture: ComponentFixture<ListpersonajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListpersonajesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
