import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseDateComponent } from './course-date.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [CourseDateComponent],
  exports: [CourseDateComponent],
})
export class CourseDateModule {}
