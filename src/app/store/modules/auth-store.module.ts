import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthEffects } from "../effects/auth.effects";
import { authReducer } from "../reducers/auth.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ]
})

export class AuthStoreModule {}