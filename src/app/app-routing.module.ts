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
  {
    path: 'god-of-war',
    loadChildren: () => import('./categorias/accion/god-of-war/god-of-war.module').then( m => m.GodOfWarPageModule)
  },
  {
    path: 'wukong',
    loadChildren: () => import('./categorias/accion/wukong/wukong.module').then( m => m.WukongPageModule)
  },
  {
    path: 'hogwarts',
    loadChildren: () => import('./categorias/aventura/hogwarts/hogwarts.module').then( m => m.HogwartsPageModule)
  },
  {
    path: 'sackboy',
    loadChildren: () => import('./categorias/aventura/sackboy/sackboy.module').then( m => m.SackboyPageModule)
  },
  {
    path: 'eafc25',
    loadChildren: () => import('./categorias/deportes/eafc25/eafc25.module').then( m => m.Eafc25PageModule)
  },
  {
    path: 'nba2k25',
    loadChildren: () => import('./categorias/deportes/nba2k25/nba2k25.module').then( m => m.Nba2k25PageModule)
  },
  {
    path: 'cod',
    loadChildren: () => import('./categorias/shooter/cod/cod.module').then( m => m.CodPageModule)
  },
  {
    path: 'halo',
    loadChildren: () => import('./categorias/shooter/halo/halo.module').then( m => m.HaloPageModule)
  },
  {
    path: 'residentevil',
    loadChildren: () => import('./categorias/terror/residentevil/residentevil.module').then( m => m.ResidentevilPageModule)
  },
  {
    path: 'stillwakes',
    loadChildren: () => import('./categorias/terror/stillwakes/stillwakes.module').then( m => m.StillwakesPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'camara',
    loadChildren: () => import('./camara/camara.module').then( m => m.CameraPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },








];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }