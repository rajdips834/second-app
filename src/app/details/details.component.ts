import { Component } from '@angular/core';
import { Newlyweds } from 'src/interfaces/newlywed';
import { VenueDetails } from 'src/interfaces/venueDetais';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  timeDetails={
    reception:'Saturday | 13th May 2023 | 7:30PM',
    wedding:'Sunday | 14th May 2023 | 7:45 AM'
  }
  venueDetails: VenueDetails = {
    
    addressLine1: "Babayaga",
    addressLine2:'Deeznuts'


  }
  newlyweds:Newlyweds={
    bride: 'Meghana',
    groom:'Anirban'
  }

  foo(e: any) {

    console.log(e);
  }
}
