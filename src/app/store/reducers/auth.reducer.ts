import { Login } from 'src/app/models/login.interface';

export interface State {
  isAuthenticated: boolean;
  user: Login | null;
  errorMessage: string | null;
};

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};


export function authReducer(state = initialState, action): State {
  switch (action.type) {
    case '[Login Page Component] Load Login Success': {
      console.log(action)
      return {
        ...state,
        isAuthenticated: true,
        user: {
          login: action.payload.login,
          password: action.payload.password,
        },
        errorMessage: null,
      }
    }
    case '[Login Page Component] Load Login Failure': {
      return {
        ...state,
        errorMessage: 'Incorrect email or password. Please try again',
      }
    }
    case '[Login Page Component] Log Out': {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        errorMessage: null,
      }
    }
    default: {
      return state;
    }
  }
}