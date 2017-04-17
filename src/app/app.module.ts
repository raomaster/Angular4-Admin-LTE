import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import {  } from "@ng-bootstrap/ng-bootstrap";


import { AppComponent } from './app.component';
import { NavComponent } from './server/nav/nav.component';
import { SidebarComponent } from './server/sidebar/sidebar.component';
import { FooterComponent } from './server/footer/footer.component';
import { ControlSidebarComponent } from './server/control-sidebar/control-sidebar.component';
import { PruebaComponent } from './site/content/prueba/prueba.component';
import { InicioComponent } from './site/content/inicio/inicio.component';
import { BodegasComponent } from './site/content/bodegas/bodegas.component';
import { ArticulosComponent } from './site/content/articulos/articulos.component';
// import { PageNotFoundComponent } from './site/content/page-not-found/page-not-found.component';


// Rutas
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: PruebaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'bodegas', component: BodegasComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '**', redirectTo: '/' }

  // { path: '**', component: PageNotFoundComponent }
  // { path: 'path/:routeParam', component: MyComponent },
  // { path: 'staticPath', component: ... },
  // { path: '**', component: ... },
  // { path: 'oldPath', redirectTo: '/staticPath' },
  // { path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    ControlSidebarComponent,
    PruebaComponent,
    InicioComponent,
    BodegasComponent,
    ArticulosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
