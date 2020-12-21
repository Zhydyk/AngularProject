import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseDateComponent } from './course-date.component';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CourseDateComponent],
  exports: [CourseDateComponent],
})
export class CourseDateModule {}
