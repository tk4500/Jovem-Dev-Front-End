import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroCaminhaoComponent } from './cadastro-caminhao.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CadastroCaminhaoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    CadastroCaminhaoComponent
  ]
})
export class CadastroCaminhaoModule { }
