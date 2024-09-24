import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemCaminhaoComponent } from './listagem-caminhao.component';



@NgModule({
  declarations: [
    ListagemCaminhaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListagemCaminhaoComponent
  ]
})
export class ListagemCaminhaoModule { }
