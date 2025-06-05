import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  template: `
  <ul>
    <li *ngFor="let user of users">{{user.userName}}</li>
  </ul>`
})
export class UsersComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get<any[]>('/api/users').subscribe(u => this.users = u);
  }
}
