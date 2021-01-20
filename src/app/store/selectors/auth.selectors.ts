import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.states';
import { AuthState } from '../reducers/auth.reducer';

export const selectFeature = createFeatureSelector<AppState, AuthState>('auth');
export const selectIsUserLogged = createSelector(
  selectFeature,
  (state: AuthState): boolean => {
    return state.isAuthenticated
  }
);
export const selectUserInfo = createSelector(
  selectFeature,
  (state: AuthState) => {
    return state.userInfo
  }
)
