import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route, Routes } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly auth: AuthService,
              private readonly router: Router) { }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    console.log(next);
    if (await this.auth.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }
}

export function applyAuthGuard(routes: Routes) {
  routes.forEach(r => { apply(r); });
}

function apply(r: Route) {

  if (r.data && r.data.isPublic) {
    return;
  }

  if (!r.canActivate) {
    r.canActivate = [];
  }
  r.canActivate.push(AuthGuard);

  if (r.children) {
    r.children.forEach(c => { apply(c); });
  }
}
