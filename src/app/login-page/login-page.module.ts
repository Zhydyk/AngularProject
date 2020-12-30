import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/components/header/header.module';
import { LoginPageRoutinModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [CommonModule, HeaderModule, ReactiveFormsModule, LoginPageRoutinModule],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})

export class LoginPageModule {}