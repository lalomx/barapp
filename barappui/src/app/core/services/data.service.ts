import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

import { config } from '../config/config';
import { catchError } from 'rxjs/operators';

export class DataService {

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private readonly args: { endPoint: string },
    private readonly httpClient: HttpClient) { }

  save(data: any) {
    const body = JSON.stringify(data);
    if (data.id) {
      return this.httpClient.put(`${this.getUrl()}${data.id}`, body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
    } else {
      return this.httpClient.post(this.getUrl(), body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
    }
  }

  get<T>(id: string) {
    return this.httpClient.get<T>(`${this.getUrl()}${id}/`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  getAll<T>() {
    return this.httpClient.get<T>(`${this.getUrl()}`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  delete(id: string) {
    return this.httpClient.delete(`${this.getUrl()}${id}`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  getRoute<T>(route: string) {
    return this.httpClient.get<T>(`${this.getUrl()}${route}/`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  private getUrl() {
    return `${config.api}${this.args.endPoint}/`;
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
