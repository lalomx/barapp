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

  public save(data: any) {
    const body = JSON.stringify(data);
    return this.httpClient.post(this.getUrl(), body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public update(data: any, id: string) {
    const body = JSON.stringify(data);
    return this.httpClient.put(`${this.getUrl()}${id}`, body, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public get<T>(id: string) {
    return this.httpClient.get<T>(`${this.getUrl()}${id}/`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public getAll<T>() {
    return this.httpClient.get<T>(`${this.getUrl()}`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public delete(id: string) {
    return this.httpClient.delete(`${this.getUrl()}${id}`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  public getRoute<T>(route: string) {
    return this.httpClient.get<T>(`${this.getUrl()}${route}/`, this.httpOptions)
      .pipe(
        catchError(e => this.handleError(e))
      );
  }

  private getUrl() {
    return `${config.api}${this.args.endPoint}/`;
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);
    // TODO: Show a toaster
    return throwError(error.error);
  }
}
