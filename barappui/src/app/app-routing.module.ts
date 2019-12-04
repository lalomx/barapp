import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitComponent } from './init/init.component';
import { ComandasComponent } from './comandas/comandas.component';
import { ReportesComponent } from './reportes/reportes.component';
import { MenuComponent } from './menu/menu.component';
import { AlertaComponent } from './alerta/alerta.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PageComponent } from './shared/pages/page/page.component';
import { PageNavComponent } from './shared/pages/page-nav/page-nav.component';
import { ProductosComponent } from './productos/productos.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { isPublic: true } },
  {
    path: '', component: InitComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'comandas', data: { title: 'Comandas' }, component: ComandasComponent },
      {
        path: 'inventario', component: PageNavComponent,
        data: {
          title: 'Inventario',
          tabs: [{ title: 'Almacen', path: 'almacen' }, { title: 'A venta', path: 'productos' }],
          isTabbed: true,
        },
        children: [
          { path: 'almacen', component: InventarioComponent, data: { title: 'Almacen'} },
          { path: 'productos', component: ProductosComponent, data: { title: 'Produtos'} },
          { path: '', pathMatch: 'full', redirectTo: 'almacen' },
        ]
      },
      // { path: 'alertas', component: AlertaComponent },
      // { path: 'menus', component: MenuComponent },
      // { path: 'reportes', component: ReportesComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'dashboard', data: { isPublic: true } }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: '', data: { isPublic: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
