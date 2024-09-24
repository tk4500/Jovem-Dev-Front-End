import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaminhaoRoutingModule } from './caminhao-routing.module';
import { CaminhaoComponent } from './caminhao.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CaminhaoComponent
  ],
  imports: [
    CommonModule,
    CaminhaoRoutingModule,
    ReactiveFormsModule
  ]
})
export class CaminhaoModule { }
