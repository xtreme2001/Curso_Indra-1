// Elementos de Angular
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// Modulos "hijos"
import { CommonsModule } from './commons/commons.module';
import { EventosModule } from './eventos/eventos.module';
// Componentes definidos en el módulo
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IdeasComponent } from './ideas/ideas.component';
import { NoticiaComponent } from './noticia/noticia.component'


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IdeasComponent,
    NoticiaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonsModule,
    EventosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
