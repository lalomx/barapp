import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import { DropdownService } from './dropdown.service';

@Injectable()
export class BootstrapperService {

   constructor(private readonly injector: Injector) { }

   async bootstrap() {
      const authService = this.injector.get(AuthService);
      const userService = this.injector.get(UserService);
      const dropdownService = this.injector.get(DropdownService);
      if (await authService.isLoggedIn()) {
         await userService.bootstrap();
         await dropdownService.init();
      }
   }
}
