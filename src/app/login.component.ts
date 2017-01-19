import { NgForm } from '@angular/forms';
import { Output, Input, Component, EventEmitter } from '@angular/core';
import { UserLogin } from './user';

@Component ({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class UserLoginComponent {
  @Input() xsrf_token: string;
  @Output() r_signal = new EventEmitter();
  model = new UserLogin("", "", "", "");
  submitted = false;
  onSubmit(f: NgForm) {
    console.log(f.value)
  }
  clickReg() {
    this.r_signal.emit("reg");
    console.log("send");
  };
}
