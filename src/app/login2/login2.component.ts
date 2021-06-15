import { Component, OnInit } from '@angular/core';
import {
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder
} from "@angular/forms";

export class User {
  constructor(public email: string,
    public password: string) {
  }
}
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  form:any= FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }

  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
        new User(
          this.form.value.email,
          this.form.value.password
        )
      );
    }
  }

}
