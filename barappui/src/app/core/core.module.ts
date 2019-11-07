import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DataServiceFactory } from './services/data-service-factory.service';
import { UserService } from './services/user.service';
import { StorageService } from './services/storage.service';
import { BootstrapperService } from './services/bootstrapper.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { MetadataTableService } from './services/metadata-table.service';
import { MetadataFormService } from './services/metadata-form.service';
import { DropdownService } from './services/dropdown.service';



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
    DropdownService,
    BootstrapperService,
    MetadataTableService,
    MetadataFormService],

})
export class CoreModule { }
