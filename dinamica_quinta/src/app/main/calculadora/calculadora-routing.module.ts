import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora.component';

const routes: Routes = [
  {
    path: "",
    component: CalculadoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CalculadoraRoutingModule { }
