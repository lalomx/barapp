import { Injectable, Injector } from '@angular/core';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

@Injectable()
export class BootstrapperService {

   constructor(private readonly injector: Injector) { }

   async bootstrap() {
      const authService = this.injector.get(AuthService);
      const userService = this.injector.get(UserService);
      if (await authService.isLoggedIn()) {
         userService.bootstrap();
      }
   }
}
