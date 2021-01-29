import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../app.states';
import { AuthorState } from '../reducers/author.reducer';

export const selectAuthorFeature = createFeatureSelector<AppState, AuthorState>(
  'authors'
);
export const selectAuthor = createSelector(
  selectAuthorFeature,
  (state: AuthorState) => state.authors
);
