import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-form',
  templateUrl: './app/users/user-form.component.html',
  styleUrls: [
    './app/users/user-form.component.css'
  ]
})

export class UserFormComponent {
  // send out information to a listener
  @Output() userCreated = new EventEmitter();

  // newUser variable is a new model User
  newUser: User = new User();

  // set an active variable for resetting the form
  active: boolean = true;

  onSubmit() {
    // send out the event that a user has been created
    this.userCreated.emit({ user: this.newUser });

    // after submit reset the form
    this.newUser = new User();

    // unshow the form
    this.active = false;

    // reset the active state
    setTimeout(() => this.active = true, 0);
  }
}