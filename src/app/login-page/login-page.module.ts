import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import { FooterModule } from '../shared/components/footer/footer.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
    imports: [CommonModule, FooterModule, HeaderModule, ReactiveFormsModule],
    declarations: [LoginPageComponent],
    exports: [LoginPageComponent]
})

export class LoginPageModule {}