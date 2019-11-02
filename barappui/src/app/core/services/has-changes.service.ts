import { Injectable } from '@angular/core';

export class HasChangesService {

  constructor() { }

  private changes = false;

  set hasChanges(value) {
    this.changes = value;
  }

  get hasChanges() {
    return this.changes;
  }
}
