import * as auth from './reducers/auth.reducer';

export interface LoginState {
  authState: auth.State
}

export const reducers = {
  auth: auth.authReducer
}

