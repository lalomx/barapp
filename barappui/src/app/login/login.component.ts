import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth.service';
import { Router } from '../../../node_modules/@angular/router';
import * as uuid from 'uuid';

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
      const data = await this.auth.login(this.loginForm.value.username, this.loginForm.value.password);
      console.log(data);
      this.router.navigate(['']);
    } catch (e) {
      this.errors = e;
      console.log('error');
      console.log(e);
    } finally {
      this.submitted = false;
    }
  }
}
