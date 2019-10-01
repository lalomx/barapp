
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { StorageService } from './storage.service';
import { DataServiceFactory } from './data-service-factory.service';
import { User } from '../interfaces/user';
@Injectable()
export class UserService {
  private internalUser: User;
  private initialized: boolean;
  private dataService: DataService;
  constructor(private readonly storageService: StorageService,
              private readonly dataServiceFactory: DataServiceFactory) {
    this.dataService = this.dataServiceFactory.create('users');
  }
  get user() {
    return this.internalUser;
  }
  set user(user: User) {
    this.internalUser = user;
  }
  getUserName() {
    return this.internalUser.username;
  }
  async bootstrap() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    const username = this.storageService.getEntity('username');
    this.internalUser = await this.dataService.get<User>(username).toPromise();
  }
}
