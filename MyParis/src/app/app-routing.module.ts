import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Home2Component } from './components/home2/home2.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { AboutComponent } from './components/about/about.component';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'home2', pathMatch: 'full' },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  {
    path: 'home2',
    component: Home2Component,
    children: [
      { path: 'home', component: HomeComponent, },
      { path: 'categorias', component: CategoriasComponent, },
      { path: 'mapa', component: MapaComponent, },
      { path: 'about', component: AboutComponent, },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
