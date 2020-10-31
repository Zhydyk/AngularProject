import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/components/shared.module';
import { CoursePageModule } from './course-page/course-page.module';

@NgModule({
  imports: [CommonModule, SharedModule, CoursePageModule],
  exports: [CoursePageModule]
})
export class FeatureModule {}
