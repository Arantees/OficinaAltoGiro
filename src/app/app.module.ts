import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",component:PaginaInicialComponent},
  {path:"contato",component:ContatosComponent},
  {path:"servicos",component:ServicosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    ContatosComponent,
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
