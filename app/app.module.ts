import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component'; 
import { UserFormComponent } from './users/user-form.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],

  // components or directives used
  declarations: [ 
    AppComponent,
    UserProfileComponent,
    UserFormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {};