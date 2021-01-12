import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Login } from '../models/login.interface';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public loginForm: FormGroup;
  public subscription: Subscription;

  get login(): AbstractControl {
    return this.loginForm.get('login');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    const userLogin: Login = {
      login: this.login.value,
      password: this.password.value,
    };
    this.subscription = this.authenticationService
      .login(userLogin)
      .subscribe(
        () => this.router.navigate(['courses']),
        (err) => console.error(err)
      );
  }

  private buildForm(): void {
    this.loginForm = this.fb.group({
      login: [
        '',
        {
          validators: [Validators.required],
          updateOn: 'blur',
        },
      ],
      password: ['', { validators: [Validators.required] }],
    });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
