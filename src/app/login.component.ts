import { NgForm } from '@angular/forms';
import { Input, Component } from '@angular/core';
import { UserLogin } from './user';

@Component ({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class UserLoginComponent {
  @Input() xsrf_token: string;
  model = new UserLogin("", "", "", "");
  submitted = false;
  onSubmit(f: NgForm) {
    console.log(f.value)
  }
}
