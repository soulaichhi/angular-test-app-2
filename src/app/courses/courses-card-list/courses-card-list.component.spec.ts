import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesModule } from '../courses.module';
import { CoursesCardListComponent } from './courses-card-list.component';
import { setupCourses } from '../common/setup-test-data';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('CoursesCardListComponent', function () {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CoursesCardListComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));
  it('should create the component', function () {
    expect(component).toBeTruthy();
  });
  it('should display the course list', function () {
    component.courses = setupCourses();
    fixture.detectChanges();

    const cards = el.queryAll(By.css('.course-card'));
    expect(cards).toBeTruthy('Could Not find cards');
    expect(cards.length).toBe(12, 'unexpected number of courses');
  });
  it('should display the first course', function () {
    component.courses = setupCourses();
    fixture.detectChanges();
    const course = component.courses[0];
    const card = el.query(By.css('.course-card:first-child'));
    const title = card.query(By.css('mat-card-title'));
    const image = card.query(By.css('img'));
    expect(card).toBeTruthy('Could not find course card');
    expect(title.nativeElement.textContent).toBe(course.titles.description);
    expect(image.nativeElement.src).toBe(course.iconUrl);
  });
});
