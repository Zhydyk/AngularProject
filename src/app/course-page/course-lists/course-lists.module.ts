import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { CourseCardModule } from 'src/app/shared/components/course-card/course-card.module';
import { DeleteModalModule } from 'src/app/shared/components/delete-modal/delete-modal.module';
import { CoursePlateDirective } from 'src/app/shared/directives';
import { FilterPipeModule } from 'src/app/shared/pipes/filter/filter.module';
import { FilterPipe } from 'src/app/shared/pipes/filter/filter.pipe';
import { OrderByPipeModule } from 'src/app/shared/pipes/orderBy/order-by.module';
import { CourseListsComponent } from './course-lists.component';

@NgModule({
  imports: [
    CommonModule,
    CourseCardModule,
    FilterPipeModule,
    OrderByPipeModule,
    DeleteModalModule,
    TranslateModule,
  ],
  declarations: [CourseListsComponent, CoursePlateDirective],
  exports: [CourseListsComponent],
  providers: [FilterPipe],
})
export class CourseListsModule {}
