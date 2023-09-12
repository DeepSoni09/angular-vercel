import { Component, Input, Output, EventEmitter } from '@angular/core';
import { course } from '../modals/course';
import {CourseService} from '../Services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  constructor(private service: CourseService){}
 
  selectedCourse: course;



  // @Output()
  // transferdetails: EventEmitter<object> = new EventEmitter<object>();

  // onselect(data: object) {
  //   this.transferdetails.emit(data);
  // }

courses;
 ngOnInit(){
  this.courses=this.service.courses;
 }




  getallcourses() {
    return this.courses.length;
  }


  getfreecourses() {
    return this.courses.filter(course => course.type === 'Free').length;
  }
  getpaidcourses() {
    return this.courses.filter(course => course.type === 'Paid').length;
  }



  // @Input() getsearchvalue: string = '';
  getsearchvalue: string = '';
  displaycourse: string = 'All';

  getsearch(search: string) {
    this.getsearchvalue = search;
  }

  receieve(data: string) {
    this.displaycourse = data;
  }
}
