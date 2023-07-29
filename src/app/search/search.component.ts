import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchvalue: string = '';
  // searchvalue.toString();

  @Output()
  valuesearch: EventEmitter<string> = new EventEmitter<string>();

  onclickbtn() {
    this.valuesearch.emit(this.searchvalue);
    // console.log(this.searchvalue);
  }
}
