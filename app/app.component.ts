import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: [
    './app/app.component.css'
  ]
})

export class AppComponent {
  // create the users list
  users: User[] = [
    { id: 25, name: 'Jarvis', username: "j.a.r.v.i.s." },
    { id: 26, name: 'Tony', username: "tony_stark" },
    { id: 27, name: 'Pepper', username: "miss_potts" }
  ];

  // current selected user
  activeUser: User;

  // set the selected user
  selectUser(user) {
    this.activeUser = user;
  }

  // when the template listener receives data
  onUserCreated(event) {
    this.users.push(event.user);
  }
};