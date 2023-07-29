import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  websitefirstchar: string = 'Co';
  websitename: string = 'dality';

  ishidden = true;

  searchedvalue: string ='';

  // search(data:Event){
  //   // console.log(<HTMLInputElement>data.target.value);
  //   this.searchvalue=(<HTMLInputElement>data.target).value;
  // }
}
