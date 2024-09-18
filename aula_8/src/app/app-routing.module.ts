import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
  {path: 'inicial', component: InicialComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'teste', redirectTo: 'clientes'},
  {path: 'clientes',
    children: [
      {path: '', component: FormularioComponent},
      {path: 'formulario', component: FormularioComponent},
      {path: 'lista', component: ListaComponent}
    ]
  },
  {path: '**', redirectTo:'inicial'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
