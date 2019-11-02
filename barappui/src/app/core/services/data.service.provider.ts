import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { InjectionToken, FactoryProvider } from '@angular/core';

export function dataServiceFactoryProvider(endPoint: | string, token = ''): FactoryProvider {
    return {
        provide: token || DataService,
        useFactory: useDataServiceFactory,
        deps: [
            HttpClient,
            new InjectionToken<string>('endPoint', { factory: () => endPoint })],
            multi: true
    };
}

export function useDataServiceFactory(http: HttpClient, endPoint: string) {
    console.log(endPoint);
    console.log(http);
    return new DataService({ endPoint }, http);
}
