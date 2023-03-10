import { Component, Input } from '@angular/core';
import { VenueDetails } from 'src/interfaces/venueDetais';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.css']
})
export class VenueComponent {
  @Input() venue?: VenueDetails

}
