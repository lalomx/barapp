import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

   setEntity(key: string, entity: string) {
      localStorage.setItem(key, entity);
   }

   getEntity(key: string) {
      return localStorage.getItem(key) ? localStorage.getItem(key) : null;
   }

   removeItem(key: string) {
      return localStorage.removeItem(key);
   }

   clear() {
      return localStorage.clear();
   }
}
