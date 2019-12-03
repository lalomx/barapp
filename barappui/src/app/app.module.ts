import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InitComponent } from './init/init.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { BootstrapperService } from './core/services/bootstrapper.service';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { applyAuthGuard } from './core/guards/auth.guard';
import { Router } from '../../node_modules/@angular/router';
import { ComandasComponent } from './comandas/comandas.component';
import { InventarioComponent } from './inventario/inventario.component';
import { MenuComponent } from './menu/menu.component';
import { AlertaComponent } from './alerta/alerta.component';
import { ReportesComponent } from './reportes/reportes.component';
import { SharedModule } from './shared/shared.module';
import { ProductosComponent } from './productos/productos.component';
import { InventarioProductosListComponent } from './productos/inventario-productos-list.component';

export function initializeApp(bootstrapperService: BootstrapperService) {
  return (): Promise<any> => {
    return bootstrapperService.bootstrap();
  };
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InitComponent,
    DashboardComponent,
    ComandasComponent,
    InventarioComponent,
    MenuComponent,
    AlertaComponent,
    ReportesComponent,
    ProductosComponent,
    InventarioProductosListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [BootstrapperService],
      multi: true
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {
    applyAuthGuard(this.router.config);
  }

}
