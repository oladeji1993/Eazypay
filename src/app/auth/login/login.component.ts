import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { regexValidator } from 'src/app/@core/utils/helper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  loginForm!: FormGroup;
  loader: boolean = false;
  deviceInfo: any;
  public submitted = false;

  constructor(
    public fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],

      password: [
        null,
        [
          Validators.required,
          regexValidator(new RegExp('^(?=.*?[A-Z])'), {
            uppercaseLetter: true,
          }),
          regexValidator(new RegExp('(?=.*?[a-z])'), { lowercaseLetter: true }),
          regexValidator(new RegExp('(?=.*?[0-9])'), { number: true }),
          regexValidator(new RegExp('(?=.*?[#?!@$%^&*-])'), {
            specialCharacter: true,
          }),
          regexValidator(new RegExp('.{8,}$'), { minimum: true }),
        ],
      ],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  getErrorMessage(instance: string) {
    this.loginForm.get('email')?.updateValueAndValidity();
    if (
      instance === 'email' &&
      this.loginFormControl['email'].hasError('required')
    ) {
      return 'Please enter your email';
    } else if (
      instance === 'email' &&
      this.loginFormControl['email'].hasError('email')
    ) {
      return 'Sorry, this is not a valid email';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('required')
    ) {
      return 'Please enter your password';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('uppercaseLetter')
    ) {
      return 'Your password must have at least 1 uppercase letter';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('lowercaseLetter')
    ) {
      return 'Your password must have at least 1 lowercase letter.';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('number')
    ) {
      return 'Your password must have at least a digit (0-9)';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('specialCharacter')
    ) {
      return 'Your password must have at least a special character';
    } else if (
      instance === 'password' &&
      this.loginFormControl['password'].hasError('minimum')
    ) {
      return 'Your password must have at least a minimum of 8 characters.';
    } else {
      return;
    }
  }

  login() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.invalid) {
      return;
    } else if (email == 'admin@yahoo.com' && password == 'Password@123') {
      this.router.navigate(['/dashboard']);
      this.toastr.success('Login Successful','Success')
    }else{
      this.toastr.error('Invalid email or password','Error')
    }
  }
}
