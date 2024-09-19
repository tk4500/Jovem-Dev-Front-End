import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemUsuarioRoutingModule } from './listagem-usuario-routing.module';
import { ListagemUsuarioComponent } from './listagem-usuario.component';


@NgModule({
  declarations: [
    ListagemUsuarioComponent
  ],
  imports: [
    CommonModule,
    ListagemUsuarioRoutingModule
  ]
})
export class ListagemUsuarioModule { }
