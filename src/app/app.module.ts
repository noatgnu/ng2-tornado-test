import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './login.component';
import { RegistrationComponent } from './registration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [
    Location, 
    {provide: LocationStrategy, useClass: PathLocationStrategy}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
