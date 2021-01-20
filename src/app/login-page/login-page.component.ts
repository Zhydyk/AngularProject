import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Login } from '../models/login.interface';
import { AppState } from '../store/app.states';
import * as fromAction from '../store/actions/auth.actions';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
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
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  public onSubmit(): void {
    const userLogin: Login = {
      login: this.login.value,
      password: this.password.value,
    };
    this.store.dispatch(fromAction.login({userLogin}));
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
}
