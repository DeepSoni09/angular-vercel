import { Component,Input, ViewChild } from '@angular/core';
import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  eventcatchparent: string = '';
  getsearch(data: string) {
    this.eventcatchparent = data;
  }


  // @ViewChild(CoursesComponent) tryaccess :CoursesComponent;

  senddata:object;

  receivedata(data){
    this.senddata=data;
    // console.log(typeof data);
  };
  
}
