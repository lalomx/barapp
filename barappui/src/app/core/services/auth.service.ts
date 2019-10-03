import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Subject, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { StorageService } from './storage.service';
import { config } from '../config/config';

@Injectable()
export class AuthService {

  private loggedInSource: Subject<boolean> = new Subject<boolean>();

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient,
              private router: Router,
              private storageService: StorageService) { }

  loggedIn$ = this.loggedInSource.asObservable();
  isLoggedOut = true;

  login(username: string, password: string) {
    this.loggedInSource.next(false);
    this.storageService.clear();
    return this.http.post<any>(this.getUrl(),
      JSON.stringify({ username, password }),
      this.httpOptions)
      .pipe(
        tap(res => {
          if (res.token) {
            this.storageService.setEntity('id_token', res.token);
            this.storageService.setEntity('username', username);
          }
          this.isLoggedOut = false;
          this.loggedInSource.next(true);
          this.router.navigate(['/']);
        }),
        catchError((error: HttpErrorResponse) => this.handleError(error))
      ).toPromise();
  }

  async isLoggedIn() {
    if (!this.storageService.getEntity('id_token')) {
      return false;
    }

    return await this.isValidToken();
  }

  logout() {
    this.isLoggedOut = true;
    this.loggedInSource.next(false);
    this.storageService.clear();
    this.router.navigate(['login']);
  }
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  private getUrl() {
    return `${config.api}login`;
  }

  private getValidationTokenUrl() {
    return `${config.api}token-verify`;
  }

  private async isValidToken() {
    const token = this.storageService.getEntity('id_token');
    try {
      await this.http.post<any>(this.getValidationTokenUrl(),
        JSON.stringify({ token }),
        this.httpOptions)
        .pipe(catchError(e => throwError('Error')))
        .toPromise();
      return true;
    } catch {
      return false;
    }
  }
}
