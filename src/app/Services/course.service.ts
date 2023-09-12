import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {


  constructor() { }
  courses = [
    { id: 1, title: 'C for beginners', price: '$0', type: 'Free', available: 'Available', img: '/assets/course-images/logo-c-1.png', desc: 'In this course, you will learn fundamental and basics of C language. This course is purely designed for beginners.' },
    { id: 2, title: 'C++ for beginners', price: '$100', type: 'Paid', available: 'Available', img: '/assets/course-images/C-PNG-Image (1).png', desc: 'In this course, you will learn fundamental and basics of C++. This course is purely designed for beginners.' },
    { id: 3, title: 'Java for beginners', price: '$200', type: 'Paid', available: 'Not Available', img: '/assets/course-images/java_logo_640.jpg', desc: 'In this course, you will learn fundamental and basics of  Java. This course is purely designed for beginners.' },
    { id: 4, title: 'Html for beginners', price: '$0', type: 'Free', available: 'Available', img: '/assets/course-images/logo-2582748_960_720.png', desc: 'In this course, you will learn fundamental and basics of Html. This course is purely designed for beginners.' },
    { id: 5, title: 'CSS for beginners', price: '$30', type: 'Free', available: 'Not Available', img: '/assets/course-images/css3.jpg', desc: 'In this course, you will learn fundamental and basics of CSS. This course is purely designed for beginners.' },
    { id: 6, title: 'JavaScript for beginners', price: '$300', type: 'Paid', available: 'Available', img: '/assets/course-images/logo-javascript-2.png', desc: 'In this course, you will learn fundamental and basics of JavaScript. This course is purely designed for beginners.' },
    { id: 7, title: 'React for beginners', price: '$350', type: 'Paid', available: 'Not Available', img: '/assets/course-images/157-1575410_react-js-logo-png-transparent-png.png', desc: 'In this course, you will learn fundamental and basics of React. This course is purely designed for beginners.' },
    { id: 8, title: 'Angular for beginners', price: '$400', type: 'Paid', available: 'Available', img: '/assets/course-images/angular-icon-logo.png', desc: 'In this course, you will learn fundamental and basics of Angular. This course is purely designed for beginners.' }
  ];
}
