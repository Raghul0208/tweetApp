import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { HeaderComponent } from './header/header.component';
import { AllUsersComponent } from './all-users/all-users.component';
import { MyTweetsComponent } from './my-tweets/my-tweets.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TwitterComponent,
    ResetpasswordComponent,
    HeaderComponent,
    AllUsersComponent,
    MyTweetsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 ReactiveFormsModule,
 HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
