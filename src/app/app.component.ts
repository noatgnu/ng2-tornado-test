import { Output, Input, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user';
declare var xsrf: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public isCollapsed = false;
  public token = xsrf;
  public hide_reg: boolean = false;
  onClickReg(message: any) {
    console.log(message);
    console.log(this.hide_reg);
    this.hide_reg = !this.hide_reg;
  }
  clickReg() {
    this.hide_reg = !this.hide_reg;
  }
}