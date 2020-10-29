import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnfularMentoringHeaderComponent } from './anfular-mentoring-header.component';

describe('AnfularMentoringHeaderComponent', () => {
  let component: AnfularMentoringHeaderComponent;
  let fixture: ComponentFixture<AnfularMentoringHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnfularMentoringHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnfularMentoringHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
