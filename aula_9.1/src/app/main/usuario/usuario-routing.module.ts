import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario.component';
import { CadastroUsuarioComponent } from './features/cadastro-usuario/cadastro-usuario.component';
import { ListagemUsuarioComponent } from './features/listagem-usuario/listagem-usuario.component';

const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'cadastro', component: CadastroUsuarioComponent},
  {path: 'listagem', component: ListagemUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
