import { TestBed } from '@angular/core/testing';

import { DataServiceFactoryService } from './data-service-factory.service';

describe('DataServiceFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataServiceFactoryService = TestBed.get(DataServiceFactoryService);
    expect(service).toBeTruthy();
  });
});
