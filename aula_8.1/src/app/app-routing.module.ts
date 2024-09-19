import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicialComponent } from './inicial/inicial.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaComponent } from './lista/lista.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicial', pathMatch: 'full'},
  {path: 'inicial', component: InicialComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario/:id', component: FormularioComponent},
  {path: 'lista', component: ListaComponent},
  {path: 'teste', redirectTo: 'clientes'},
  {path: 'clientes',
    children: [
      {path: 'formulario', component: FormularioComponent},
      {path: 'formulario/:id', component: FormularioComponent},
      {path: 'lista', component: ListaComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
