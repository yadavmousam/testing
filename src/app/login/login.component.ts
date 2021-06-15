import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private _model: any = {};

  @Input() enabled:boolean = true;
  @Output() onFormSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

   onSubmit(firstName?:string, lastName?:string, email ?: string): void {
      this._model.firstName = firstName;
      this._model.lastName = lastName;
      this._model.email = email;
      if (typeof (this._model) === "undefined") {
          alert("Form not Filled Up Properly");
      }
      else {
          alert("Data Is Correct");
          this.onFormSubmit.emit(this._model);
      }
  }


  private onClear(): void {
      this._model = {};
  }

}
