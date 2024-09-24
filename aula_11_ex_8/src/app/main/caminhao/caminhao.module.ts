import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaminhaoRoutingModule } from './caminhao-routing.module';
import { CaminhaoComponent } from './caminhao.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CadastroCaminhaoModule } from './features/cadastro-caminhao/cadastro-caminhao.module';
import { ListagemCaminhaoModule } from './features/listagem-caminhao/listagem-caminhao.module';


@NgModule({
  declarations: [
    CaminhaoComponent
  ],
  imports: [
    CommonModule,
    CaminhaoRoutingModule,
    ReactiveFormsModule,
    CadastroCaminhaoModule,
    ListagemCaminhaoModule
  ]
})
export class CaminhaoModule { }
