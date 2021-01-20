import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../shared/components/header/header.module';
import { SpinnerModule } from '../shared/components/spinner/spinner.module';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [CommonModule, HeaderModule, PageNotFoundRoutingModule, SpinnerModule],
  declarations: [PageNotFoundComponent],
  exports: [PageNotFoundComponent],
})
export class PageNotFoundModule {}
