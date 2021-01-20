import { Action, createReducer, on } from '@ngrx/store';
import { CONSTANTS } from 'src/app/constants/constants';
import { Login } from 'src/app/models/login.interface';
import * as fromAuthActions from '../actions/auth.actions';

export interface AuthState {
  isAuthenticated: boolean;
  userInfo: Login | null;
  errorMessage: string | null;
};

export const initialState: AuthState = {
  isAuthenticated: false,
  userInfo: null,
  errorMessage: null
};



const reducer = createReducer(
  initialState,
  on(fromAuthActions.login, (state) => {
    console.log('login');
    return {
      ...state,
    };
  }),
  on(fromAuthActions.loadLoginSuccess, (state, { userLogin }) => {
    console.log('login success');
    return {
      ...state,
      isAuthenticated: true,
      userInfo: userLogin,
      errorMessage: null,
    };
  }),
  on(fromAuthActions.logOut, state => {
    console.log('Log out success');
    window.localStorage.removeItem(CONSTANTS.authKey)
    return {
      ...state,
      user: null,
      isAuthenticated: false
    }
  }),
  on(fromAuthActions.loadLoginFailure, state => {
    console.log('Error');
    return {
      ...state,
      user: null,
      isAuthenticated: false,
      errorMessage: `Something went wrong, Please try to enter your email or password again`,
    }
  })
);

export function authReducer(state = initialState, action: Action): AuthState {
  return reducer(state, action);
}