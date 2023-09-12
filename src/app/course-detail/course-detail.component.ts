import { Component, Input } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';
import { course } from '../modals/course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from '../Services/course.service';


@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: CourseService) { }

  course;
  courseId;
  routeObservable;
  editMode: Boolean = false;
  value:string;
  ngOnInit() {
    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');


    this.routeObservable = this.activatedRoute.paramMap.subscribe((para) => {
      this.courseId = para.get('id');
      this.course = this.service.courses.find(x => x.id == this.courseId);

    })
    this.activatedRoute.queryParamMap.subscribe((para) => {
      this.editMode = Boolean(para.get('editMode'));
    })
  }
  ngOnDestroy() {
    this.routeObservable.unsubscribe();
  }

  edit() {
    this.router.navigate(['courses/course', this.course.id], { queryParams: { editMode: true}})
  }

}
