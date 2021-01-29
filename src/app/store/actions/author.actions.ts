import { createAction, props } from "@ngrx/store";
import { AuthorList } from "src/app/models/course.interface";

export const authors = createAction(
  '[Author Page Component] Get Authors',
);

export const loadAuthorsSuccess = createAction(
  '[Author Page Component] Get Authors Success',
  props<{ authors: AuthorList[] }>()
);

export const loadAuthorsFailure = createAction(
  '[Author Page Component] Authors Failure',
  props<{ error: Error | string }>()
);