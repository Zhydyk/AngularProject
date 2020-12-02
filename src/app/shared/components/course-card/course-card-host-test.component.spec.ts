import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Courses } from 'src/app/models/course.interface';
import { CourseCardComponent } from './course-card.component';

@Component({
    template: `
    <course-card
      [course]="course"
      (edit)="onEditCourse($event)"
      (delete)="onDeleteCourse($event)"
    ></course-card>
  `,
})
class CourseCardHostTestComponent {
    course: Courses = {
        id: 1,
        title: 'Mentoring program 1',
        creationDate: new Date('2020/01/01'),
        duration: 9,
        description: 'Lorem ipsum',
    };

    editCourse: number;
    deleteCourse: number;

    onEditCourse(course: Courses): void {
        this.editCourse = course.id;
    }

    onDeleteCourse(course: Courses): void {
        this.deleteCourse = course.id;
    }
}

describe('CourseItemComponent', () => {
    let testingHost: CourseCardHostTestComponent;
    let fixture: ComponentFixture<CourseCardHostTestComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseCardComponent, CourseCardHostTestComponent],
        });
        fixture = TestBed.createComponent(CourseCardHostTestComponent);
        testingHost = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should show correct title and description', () => {
        const courseTitle = fixture.debugElement.query(By.css('.h1'));
        const courseDescription = fixture.debugElement.query(
            By.css('.course-card-description')
        );

        const courseTitleElem = courseTitle.nativeElement;
        const courseDescriptionElem = courseDescription.nativeElement;
        expect(courseTitleElem.textContent).toContain(testingHost.course.title);
        expect(courseDescriptionElem.textContent).toContain(
            testingHost.course.description
        );
    });

    // it('should edit course-card', () => {
    //     const editButton = fixture.debugElement.query(By.css('.edit-btn'));
    //     editButton.triggerEventHandler('click', null);
    //     expect(testingHost.onEditCourse).toBe(testingHost.course.id);
    // });

    // it('should delete course-card', () => {
    //     const deleteButton = fixture.debugElement.query(By.css('.delete-btn'));
    //     deleteButton.triggerEventHandler('click', null);
    //     console.log(testingHost.deleteCourse);
    //     expect(testingHost.deleteCourse).toBe(testingHost.course.id);
    // });
});