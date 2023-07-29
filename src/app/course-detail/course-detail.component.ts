import { Component, Input } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { course } from '../modals/course';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  // @Input() access: CoursesComponent=undefined;

  // courses12:course;
  // ngOnInit(){
  //   this.courses12 = this.access?.selectedCourse;
  //   console.log(this.courses12);
  // }


  @Input() finaldata;

}
