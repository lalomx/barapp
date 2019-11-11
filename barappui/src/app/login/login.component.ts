import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import * as uuid from 'uuid';
import { UserService } from '../core/services/user.service';
import { DropdownService } from '../core/services/dropdown.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  loginForm: FormGroup;
  submitted = false;
  errors: {} = null;
  u = uuid();

  constructor(private readonly auth: AuthService,
              private readonly userService: UserService,
              private readonly dropdownService: DropdownService,
              private fb: FormBuilder,
              private readonly router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  async onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    }

    try {
      this.errors = null;
      await this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
      await this.userService.bootstrap();
      await this.dropdownService.init();
      this.router.navigate(['']);
    } catch (e) {
      this.errors = e;
    } finally {
      this.submitted = false;
    }
  }
}
