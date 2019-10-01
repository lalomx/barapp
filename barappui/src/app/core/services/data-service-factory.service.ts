import { FactoryProvider, Injectable, InjectionToken } from '@angular/core';
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

export function dataServiceFactoryProvider(args: { endPoint: string; } | string, token = ''): FactoryProvider {
  return {
    provide: token || DataService,
    deps: [
      HttpClient,
      new InjectionToken<{ endPoint: string; } | string>('args', { factory: () => args })],
    useFactory: useDataServiceFactory
  };
}

export function useDataServiceFactory(http: HttpClient, args: any) {
  return typeof args === 'string' ? new DataService({ endPoint: args }, http) : new DataService(args, http);
}
