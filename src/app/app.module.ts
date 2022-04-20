import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListPersonajesComponent } from './dashboard/list-personajes/list-personajes.component';
import { LayoutComponent } from './layout/layout.component';
import { CardPersonajeComponent } from './dashboard/list-personajes/card-personaje/card-personaje.component';
import { PersonajeComponent } from './dashboard/personaje/personaje.component';
import { LoadingComponent } from './dashboard/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    NavbarComponent,
    ListPersonajesComponent,
    LayoutComponent,
    CardPersonajeComponent,
    PersonajeComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
