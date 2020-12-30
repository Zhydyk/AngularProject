import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../models/login.interface';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  public loginForm: FormGroup;

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(private fb: FormBuilder, private authentication: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    const userLogin: Login = {
      email: this.email.value,
      password: this.password.value,
    };
    this.authentication.login(userLogin);
    this.router.navigate(['courses']);
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      email: ['', {validators: [Validators.required, Validators.email], updateOn: 'blur'}],
      password: ['', {validators: [Validators.required], updateOn: 'blur'}],
    });
  }
}
