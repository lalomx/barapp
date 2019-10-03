import { Component, OnInit } from '@angular/core';
import { UserService } from '../core/services/user.service';
import { User } from '../core/interfaces/user';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.less']
})
export class InitComponent implements OnInit {

  constructor(private readonly userService: UserService,
              private readonly authService: AuthService) { }

  user: User;
  ngOnInit() {
    this.user = this.userService.user;
  }

  logout() {
    console.log('logout');
    this.authService.logout();
  }
}
