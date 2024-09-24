import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemProdutoRoutingModule } from './listagem-produto-routing.module';
import { ListagemProdutoComponent } from './listagem-produto.component';


@NgModule({
  declarations: [
    ListagemProdutoComponent
  ],
  imports: [
    CommonModule,
    ListagemProdutoRoutingModule
  ]
})
export class ListagemProdutoModule { }
