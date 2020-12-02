import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseSearchComponent } from './course-search.component';

const searchText = 'search text';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;
  let buttonElem: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CourseSearchComponent', () => {
    expect(component).toBeTruthy();
  });

  it('searchCourse method should be called', () => {
    spyOn(component, 'searchCourse');
    buttonElem = fixture.debugElement.query(By.css('.search-button'));
    fixture.detectChanges();
    buttonElem.triggerEventHandler('click', null);
    expect(component.searchCourse).toHaveBeenCalled();
  });

  it('course search to have been called with', () => {
    component.courseSearch = searchText;
		spyOn(component.search, 'emit');
		component.searchCourse(searchText);
		expect(component.search.emit).toHaveBeenCalledWith(searchText);
	});
});
