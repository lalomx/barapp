import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetadataFormService {

  private metadata: { [key: string]: any } = {};

  getMetadata(key: string) {
    return this.metadata[key];
  }

  setMetadata(key: string, metadata: any) {
    this.metadata[key] = metadata;
  }
}
