import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraComponent } from './calculadora.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule,
    FormsModule,
  ],
  exports:[
    CalculadoraComponent
  ]
})
export class CalculadoraModule { }
