import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page-1/page-1.component';
import { Page2Component } from './page-2/page-2.component';
import { pagina1Guard } from './guard/pagina-1.guard';

const routes: Routes = [
  {path:'page-1',canActivate:[pagina1Guard], component:Page1Component},
  {path:'page-2', component:Page2Component},
  {path:'page-2/:id', resolve: { user: }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
