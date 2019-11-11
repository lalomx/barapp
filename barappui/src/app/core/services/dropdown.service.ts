import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config/config';

@Injectable()
export class DropdownService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private data = [];
  private endPoint = 'settings/dropdowns';

  constructor(private readonly httpClient: HttpClient) {
    console.log('crated');
  }

  async init() {
    this.data = await this.getAllDropdowns().toPromise();
  }

  get dropdowns() {
    return this.data;
  }

  private getAllDropdowns() {
    return this.httpClient.get<any[]>(`${this.getUrl()}`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  private getUrl() {
    return `${config.api}${this.endPoint}/`;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
