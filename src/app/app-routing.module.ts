import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from "./courses/course/course.component";
import {courseResolver} from "./courses/services/course.resolver";
import {HomeComponent} from "./courses/home/home.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent

  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: 'courses/:id',
    component: CourseComponent,
    resolve: {
      course: courseResolver
    }
  },
  {
    path: "**",
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
