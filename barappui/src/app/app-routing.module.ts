import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitComponent } from './init/init.component';
import { ComandasComponent } from './comandas/comandas.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { isPublic: true } },
  { path: '', component: InitComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'comandas', component: ComandasComponent },
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
