import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DataServiceFactory } from './services/data-service-factory.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { BootstrapperService } from './services/bootstrapper.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    DataServiceFactory,
    AuthGuard,
    UserService,
    StorageService,
    BootstrapperService]

})
export class CoreModule { }