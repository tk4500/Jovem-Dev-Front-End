import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadastroProdutoRoutingModule } from './cadastro-produto-routing.module';
import { CadastroProdutoComponent } from './cadastro-produto.component';


@NgModule({
  declarations: [
    CadastroProdutoComponent
  ],
  imports: [
    CommonModule,
    CadastroProdutoRoutingModule
  ]
})
export class CadastroProdutoModule { }
