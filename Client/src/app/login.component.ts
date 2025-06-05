import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  template: `
  <form [formGroup]="form" (ngSubmit)="login()">
    <input formControlName="userName" placeholder="User" />
    <input formControlName="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>`
})
export class LoginComponent {
  form = this.fb.group({ userName: '', password: '' });
  constructor(private fb: FormBuilder, private http: HttpClient) {}
  login() {
    this.http.post('/api/account/login', this.form.value).subscribe();
  }
}
