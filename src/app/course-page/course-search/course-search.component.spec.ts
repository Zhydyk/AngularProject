import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CourseSearchComponent } from './course-search.component';

describe('CourseSearchComponent', () => {
  let component: CourseSearchComponent;
  let fixture: ComponentFixture<CourseSearchComponent>;

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

  it('should search course-card', () => {
		spyOn(component.search, 'emit');
		const searchButton = fixture.debugElement.query(By.css('.search-button'));
		searchButton.triggerEventHandler('click', null);
		expect(component.search.emit).toHaveBeenCalledWith(undefined);
	});
});
