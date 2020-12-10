import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Courses } from 'src/app/models/course.interface';
import { ngMocks } from 'ng-mocks';
import { CourseCardComponent } from './course-card.component';
import { CourseCardModule } from './course-card.module';

const mockCourse: Courses = {
  id: 1,
  title: 'MENTORING PROGRAM 1',
  creationDate: new Date('2020/01/01'),
  duration: 150,
  description: 'Lorem ipsum'
};

describe('CourseCardComponent', () => {
  let component: CourseCardComponent;
  let fixture: ComponentFixture<CourseCardComponent>;

  beforeEach(() => {
		TestBed.configureTestingModule(ngMocks.guts(CourseCardComponent, CourseCardModule));
		fixture = TestBed.createComponent(CourseCardComponent);
		component = fixture.componentInstance;
		component.course = mockCourse;
		fixture.detectChanges();
	});

	it('should show correct title and description', () => {
		const courseTitle = fixture.debugElement.query(By.css('.h1'));
		const courseDescription = fixture.debugElement.query(By.css('.course-card-description'));

		const courseTitleElem = courseTitle.nativeElement;
		const courseDescriptionElem = courseDescription.nativeElement;

		expect(courseTitleElem.textContent).toContain(mockCourse.title);
		expect(courseDescriptionElem.textContent).toContain(mockCourse.description);
	});

	it('should edit course', () => {
		spyOn(component.edit, 'emit');
		const editButton = fixture.debugElement.query(By.css('.edit-btn'));
		editButton.triggerEventHandler('click', null);
		expect(component.edit.emit).toHaveBeenCalledWith(mockCourse.id);
	});

	it('should delete course', () => {
		spyOn(component.delete, 'emit');
		const deleteButton = fixture.debugElement.query(By.css('.delete-btn'));
		deleteButton.triggerEventHandler('click', null);
		expect(component.delete.emit).toHaveBeenCalledWith(mockCourse.id);
	});
});
