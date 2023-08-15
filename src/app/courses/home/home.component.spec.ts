/*
import {
  async,
  ComponentFixture,
  fakeAsync,
  flush,
  flushMicrotasks,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { CoursesModule } from '../courses.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoursesService } from '../services/courses.service';
import { setupCourses } from '../common/setup-test-data';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { click } from '../common/test-utils';

describe('HomeComponent', function () {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  let el: DebugElement;
  let coursesService: any;
  const beginnerCourses = setupCourses().filter(
    (course) => course.category === 'BEGINNER',
  );
  const advancedCourses = setupCourses().filter(
    (course) => course.category === 'ADVANCED',
  );

  beforeEach(waitForAsync(() => {
    const coursesServiceSpy = jasmine.createSpyObj('CoursesService', [
      'findAllCourses',
    ]);
    TestBed.configureTestingModule({
      imports: [CoursesModule, NoopAnimationsModule],
      providers: [
        {
          provide: CoursesService,
          useValue: coursesServiceSpy,
        },
      ],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
        coursesService = TestBed.get(CoursesService);
      });
  }));
  it('should create component', function () {
    expect(component).toBeTruthy();
    const mainTitle = el.query(By.css('h3'));
    expect(mainTitle.nativeElement.textContent).toBe('All Courses');
  });
  xit('should display only beginner courses', function () {
    coursesService.findAllCourses.and.returnValue(of(beginnerCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));

    expect(tabs.length).toBe(1, 'Unexpected number of tabs found');
  });
  xit('should display only advanced courses', function () {
    coursesService.findAllCourses.and.returnValue(of(advancedCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));

    expect(tabs.length).toBe(1, 'Unexpected number of tabs found');
  });
  xit('should display both tabs', function () {
    coursesService.findAllCourses.and.returnValue(of(setupCourses()));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    expect(tabs.length).toBe(2, 'Expected to find 2 tabs');
  });
  it('should display advanced courses when tab clicked', fakeAsync(function () {
    coursesService.findAllCourses.and.returnValue(of(setupCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    //click(tabs[1]);
    el.nativeElement.click();
    fixture.detectChanges();
    flush();
    //tick(16);
    const cardTitles = el.queryAll(
      By.css('.mat-tab-body-active .mat-card-title'),
    );
    expect(cardTitles.length).toBeGreaterThan(0, 'Could not find titles');
    expect(cardTitles[0].nativeElement.textContent).toContain(
      'Angular Security Course',
    );
  }));
  it('should display advanced courses when tab clicked - waitForAsync', waitForAsync(function () {
    coursesService.findAllCourses.and.returnValue(of(setupCourses));
    fixture.detectChanges();
    const tabs = el.queryAll(By.css('.mat-tab-label'));
    //click(tabs[1]);
    el.nativeElement.click();
    fixture.detectChanges();
    //flush();
    //tick(16);
    fixture.whenStable().then(() => {
      console.log('When stable');
      const cardTitles = el.queryAll(
        By.css('.mat-tab-body-active .mat-card-title'),
      );
      expect(cardTitles.length).toBeGreaterThan(0, 'Could not find titles');
      expect(cardTitles[0].nativeElement.textContent).toContain(
        'Angular Security Course',
      );
    });
  }));
});
*/
