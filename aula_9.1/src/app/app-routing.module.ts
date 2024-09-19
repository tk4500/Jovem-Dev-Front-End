import { ProdutoModule } from './main/produto/produto.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicial', redirectTo: '', pathMatch: 'full'
  },
  {path: 'produto',
    loadChildren: () => import('./main/produto/produto.module').then((m)=> m.ProdutoModule)
  },
  {path: 'usuario',
    loadChildren: () => import('./main/usuario/usuario.module').then((m)=> m.UsuarioModule)
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
