import { createAction, props } from '@ngrx/store';
import { Login } from '../../models/login.interface';

export const login = createAction(
  '[Login Page Component] Login',
  props<{ userLogin: Login }>()
);

export const loadLoginSuccess = createAction(
  '[Login Page Component] Load Login Success',
  props<{ userLogin: Login }>()
);

export const loadLoginFailure = createAction(
  '[Login Page Component] Load Login Failure',
  props<{ error: Error | null }>()
);

export const logOut = createAction(
  '[Login Page Component] Log Out'
);
