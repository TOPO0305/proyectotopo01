import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'agregarnote',
    loadChildren: () => import('./pages/agregarnote/agregarnote.module').then( m => m.AgregarnotePageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'olvidepassword',
    loadChildren: () => import('./pages/olvidepassword/olvidepassword.module').then( m => m.OlvidepasswordPageModule)
  },
  {
    path: 'administrador',
    loadChildren: () => import('./pages/administrador/administrador.module').then( m => m.AdministradorPageModule)
  },
  {
    path: 'tablanote',
    loadChildren: () => import('./pages/tablanote/tablanote.module').then( m => m.TablanotePageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./pages/carrito/carrito.module').then( m => m.CarritoPageModule)
  },
  {
    path: 'miscompras',
    loadChildren: () => import('./pages/miscompras/miscompras.module').then( m => m.MiscomprasPageModule)
  },
  {
    path: 'detallenote1',
    loadChildren: () => import('./pages/detallenote1/detallenote1.module').then( m => m.Detallenote1PageModule)
  },
  {
    path: 'detallenote2',
    loadChildren: () => import('./pages/detallenote2/detallenote2.module').then( m => m.Detallenote2PageModule)
  },
  {
    path: 'detallenote1admin',
    loadChildren: () => import('./pages/detallenote1admin/detallenote1admin.module').then( m => m.Detallenote1adminPageModule)
  },
  {
    path: 'detallenote2admin',
    loadChildren: () => import('./pages/detallenote2admin/detallenote2admin.module').then( m => m.Detallenote2adminPageModule)
  },
  {
    path: 'ventas',
    loadChildren: () => import('./pages/ventas/ventas.module').then( m => m.VentasPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
