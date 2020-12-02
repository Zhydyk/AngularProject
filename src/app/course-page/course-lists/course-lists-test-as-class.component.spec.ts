import { Courses } from "src/app/models/course.interface";
import { CourseListsComponent } from './course-lists.component';

const course: Courses = {
	id: 1,
	title: 'Mentoring program 1',
	creationDate: new Date('2021/01/01'),
	duration: 200,
	description: 'Lorem ipsum'
};

const deleteElement = 1;

describe('CoursesListComponent', () => {
	let component: CourseListsComponent;

	beforeEach(() => {
		component = new CourseListsComponent();
		component.courseLists = [course];
	});

	it('should delete course when clicked delete-btn', () => {
		component.deleteCourse.subscribe((id) => expect(id).toBe(course.id));
		component.onDeleteCourse(deleteElement);
		});
});
