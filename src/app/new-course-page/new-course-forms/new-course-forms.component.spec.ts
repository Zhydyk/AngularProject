import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseFormsComponent } from './new-course-forms.component';

describe('NewCourseFormsComponent', () => {
  let component: NewCourseFormsComponent;
  let fixture: ComponentFixture<NewCourseFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCourseFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
