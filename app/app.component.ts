import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app'
  templateUrl: './app/app.component.html',
  styles: [
    './app/app.component.css'
  ]
})
export class AppComponent {
  message: string = "Hello!";
  users: User[] = [
    { id: 25, name: 'Jarvis', username: "j.a.r.v.i.s." },
    { id: 26, name: 'Tony', username: "tony_stark" },
    { id: 27, name: 'Pepper', username: "miss_potts" }
  ];
  activeUser: User;

  selectUser(user) {
    this.activeUser = user;
  }
};