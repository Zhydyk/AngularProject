import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as fromAuthorsAction from '../actions/author.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { AuthorsService } from 'src/app/shared/services/authors.service';
import { AuthorList } from 'src/app/models/course.interface';

@Injectable()
export class AuthorEffects {
  public authors$: Observable<Action> = createEffect(() => {
    return this.action$.pipe(
      ofType(fromAuthorsAction.authors),
      switchMap(() => {
        return this.authorService.getAuthors().pipe(
          map((authors: AuthorList[]) => {
            return fromAuthorsAction.loadAuthorsSuccess({ authors });
          }),
          catchError((err) => of(fromAuthorsAction.loadAuthorsFailure(err)))
        );
      }),
    );
  });

  constructor(
    private authorService: AuthorsService,
    private action$: Actions
  ) {}
}