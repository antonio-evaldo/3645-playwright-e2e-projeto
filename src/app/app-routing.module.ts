import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./autenticacao/autenticacao.module').then(m => m.AutenticacaoModule),
  },
  {
    path: 'busca',
    loadChildren: () => import('./busca/busca.module').then(m => m.BuscaModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/pagina-nao-encontrada'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
