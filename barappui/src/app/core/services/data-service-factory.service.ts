import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Injectable()
export class DataServiceFactory {
  constructor(private readonly http: HttpClient) { }
  create(args: { endPoint: string; } | string): DataService;
  create(args: any): DataService {
    return typeof args === 'string' ? new DataService({ endPoint: args }, this.http) : new DataService(args, this.http);
  }
}
