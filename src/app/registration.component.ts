import { Output, Input, Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';

@Component({
  selector: "registration-form",
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})

export class RegistrationComponent {
  @Input() xsrf_token: string;
  @Input() r_signal: any;
  model = new User(0, "", "", "");
  
}