import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { Login2Component,User } from './login2.component';

describe('Login2Component', () => {
  let component: Login2Component;
  let fixture: ComponentFixture<Login2Component>;

  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, FormsModule],
        declarations: [Login2Component]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(Login2Component);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
});


  beforeEach(() => {
    fixture = TestBed.createComponent(Login2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
});
  

it('email field validity', () => {
  let errors = {};
  let email = component.form.controls['email'];
  expect(email.valid).toBeFalsy();

  // Email field is required
  errors = email.errors || {};
  // expect(errors['required']).toBeTruthy();

  // Set email to something
  email.setValue("test");
  errors = email.errors || {};
  // expect(errors['required']).toBeFalsy();
  // expect(errors['pattern']).toBeTruthy();

  // Set email to something correct
  email.setValue("test@example.com");
  errors = email.errors || {};
  // expect(errors['required']).toBeFalsy();
  // expect(errors['pattern']).toBeFalsy();
});

it('password field validity', () => {
  let errors = {};
  let password = component.form.controls['password'];

  // Email field is required
  errors = password.errors || {};
  // Set email to something
  password.setValue("123456");
  errors = password.errors || {};
  

  // Set email to something correct
  password.setValue("123456789");
  errors = password.errors || {}; 
});

it('submitting a form emits a user', () => {
  expect(component.form.valid).toBeFalsy();
  component.form.controls['email'].setValue("test@test.com");
  component.form.controls['password'].setValue("123456789");
  expect(component.form.valid).toBeTruthy();

  let user:any = User ;
  // Subscribe to the Observable and store the user in a local variable.
  component.loggedIn.subscribe((value:any) => user = value);

  // Trigger the login function
  component.login();

  // Now we can check to make sure the emitted value is correct
  expect(user.email).toBe("test@test.com");
  expect(user.password).toBe("123456789");
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
