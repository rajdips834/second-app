import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimingDetails } from 'src/interfaces/timingDetails';

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrls: ['./timings.component.css']
})
export class TimingsComponent {

  @Input() timings?: TimingDetails;
  @Output() parallax:EventEmitter <any>= new EventEmitter<any>()
  
  onclick(event:any){
    console.log(event)
  }
}
