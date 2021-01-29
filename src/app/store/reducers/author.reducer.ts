import { Action, createReducer, on } from "@ngrx/store"
import { AuthorList } from "src/app/models/course.interface";
import * as fromAuthorsAction from '../actions/author.actions';

export interface AuthorState {
  authors: AuthorList[]
}

export const initialAuthorState: AuthorState = {
  authors: []
}

const reducer = createReducer(
  initialAuthorState,
  on(fromAuthorsAction.authors, (state) => {
    console.log('get author');
    return {
      ...state,
    };
  }),
  on(fromAuthorsAction.loadAuthorsSuccess, (state, { authors }) => {
    console.log('get authors success');
    return {
      ...state,
      authors: authors,
    };
  }),
  on(fromAuthorsAction.loadAuthorsFailure, (state) => {
    console.log('Error authors');
    return {
      ...state,
      authors: null,
    };
  }),
)

export function authorReducer(state = initialAuthorState, action: Action): AuthorState {
  return reducer(state, action);
}