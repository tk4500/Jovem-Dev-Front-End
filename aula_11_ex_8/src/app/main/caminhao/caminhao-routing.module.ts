import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaminhaoComponent } from './caminhao.component';
import { CadastroCaminhaoComponent } from './features/cadastro-caminhao/cadastro-caminhao.component';
import { ListagemCaminhaoComponent } from './features/listagem-caminhao/listagem-caminhao.component';

const routes: Routes = [
  {path: '', component: CaminhaoComponent},
  {path: 'cadastro', component: CadastroCaminhaoComponent},
  {path: 'listagem', component: ListagemCaminhaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CaminhaoRoutingModule { }
