import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'acerca',
    loadChildren: () => import('./acerca/acerca.module').then( m => m.AcercaPageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./categorias/aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'deportes',
    loadChildren: () => import('./categorias/deportes/deportes.module').then( m => m.DeportesPageModule)
  },
  {
    path: 'shooter',
    loadChildren: () => import('./categorias/shooter/shooter.module').then( m => m.ShooterPageModule)
  },
  {
    path: 'terror',
    loadChildren: () => import('./categorias/terror/terror.module').then( m => m.TerrorPageModule)
  },
  {
    path: 'accion',
    loadChildren: () => import('./categorias/accion/accion.module').then( m => m.AccionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }