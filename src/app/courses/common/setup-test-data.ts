import { Course } from '../model/course';
import { COURSES } from '../../../../server/db-data';
import { sortCoursesBySeqNo } from '../home/sort-course-by-seq';

export function setupCourses() {
  const courses = Object.values(COURSES).sort() as Course[];
  return courses.sort(sortCoursesBySeqNo);
}
