import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AuthorEffects } from '../effects/author.effects';
import { authorReducer } from '../reducers/author.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('authors', authorReducer),
    EffectsModule.forFeature([AuthorEffects]),
  ],
})
export class AuthorStoreModule {}
