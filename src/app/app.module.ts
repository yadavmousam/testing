import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PostService } from './shared/post.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { MatInputModule } from '@angular/material/input';
// import { MatIconModule } from '@angular/material/icon';
// import { MatFormFieldModule } from '@angular/material/form-field'; 

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Login2Component } from './login2/login2.component';
import { FocusDirective } from './focus.directive';
import { TestComponent } from './test/test.component';
import { HighlightDirective } from './share/highlight.directive';
import { AboutComponent } from './about/about.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    LoginComponent,
    HomeComponent,
    Login2Component,
    FocusDirective,
    TestComponent,
    HighlightDirective,
    AboutComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // MatInputModule,
    // MatIconModule,
    // MatFormFieldModule,
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
