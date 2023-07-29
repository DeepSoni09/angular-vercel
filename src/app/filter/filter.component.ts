import { Component,Input ,Output, EventEmitter ,} from '@angular/core';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input() all:number=0;
@Input() free:number=0;
@Input() paid:number=0;



selectedvalue:string= 'All';


@Output()
filterbuttonchanged: EventEmitter<string> = new EventEmitter<string>();

onbtnclick(){
  this.filterbuttonchanged.emit(this.selectedvalue);
  // console.log(this.selectedvalue);
}
}
