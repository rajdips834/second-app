import { Component, Input } from '@angular/core';
import { TimingDetails } from 'src/interfaces/timingDetails';

@Component({
  selector: 'app-timings',
  templateUrl: './timings.component.html',
  styleUrls: ['./timings.component.css']
})
export class TimingsComponent {

  @Input() timings?: TimingDetails;

  

}
