import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseCardComponent } from './course-card/course-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooterComponent, HeaderComponent, CourseCardComponent],
  exports: [FooterComponent, HeaderComponent, CourseCardComponent],
})
export class SharedModule {}
