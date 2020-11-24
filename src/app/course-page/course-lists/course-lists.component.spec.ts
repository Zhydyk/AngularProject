import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ngMocks } from 'ng-mocks';
import { Courses } from 'src/app/models/course.interface';
import { CourseListsComponent } from './course-lists.component';
import { CourseListsModule } from './course-lists.module';

const mockCourses: Courses[] = [
  {
    id: 1,
    title: 'Mentoring Program 1',
    creationDate: new Date('2020/01/01'),
    duration: { hours: 1, minutes: 40 },
    description: 'test description'
  }
];

describe('CourseListsComponent', () => {
  let component: CourseListsComponent;
	let fixture: ComponentFixture<CourseListsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule(ngMocks.guts(CourseListsComponent, CourseListsModule));
		fixture = TestBed.createComponent(CourseListsComponent);
		component = fixture.componentInstance;
		component.courseLists = mockCourses;
		fixture.detectChanges();
	});

	it('should create component', () => {
		expect(component).toBeTruthy();
	});
});
