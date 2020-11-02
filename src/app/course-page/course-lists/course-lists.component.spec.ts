import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListsComponent } from './course-lists.component';

describe('CourseListsComponent', () => {
  let component: CourseListsComponent;
  let fixture: ComponentFixture<CourseListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
