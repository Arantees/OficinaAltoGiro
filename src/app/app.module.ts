import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ServicosComponent } from './servicos/servicos.component';
import { RouterModule, Routes } from '@angular/router';
import { RevisaoComponent } from './servicos/revisao/revisao.component';
import { SuspensaoComponent } from './servicos/suspensao/suspensao.component';
import { MotorComponent } from './servicos/motor/motor.component';
import { EmbreagemComponent } from './servicos/embreagem/embreagem.component';

const routes: Routes = [
  {path:"",component:PaginaInicialComponent},
  {path:"contato",component:ContatosComponent},
  {path:"servicos/motor",component:MotorComponent},
  {path:"servicos/revisao",component:RevisaoComponent},
  {path:"servicos/suspensao",component:SuspensaoComponent},
  {path:"servicos/embreagem",component:EmbreagemComponent},
  {path:"servicos",component:ServicosComponent},  
]
@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    ContatosComponent,
    ServicosComponent,
    RevisaoComponent,
    MotorComponent,
    SuspensaoComponent,
    EmbreagemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
