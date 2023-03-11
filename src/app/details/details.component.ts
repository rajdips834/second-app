import { Component, OnInit } from '@angular/core';
import { Newlyweds } from 'src/interfaces/newlywed';
import { TimingDetails } from 'src/interfaces/timingDetails';
import { VenueDetails } from 'src/interfaces/venueDetais';
import { DataService } from 'src/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  timeDetails?:TimingDetails;
  venueDetails?: VenueDetails;

  newlyweds?:Newlyweds;

  constructor(private data: DataService){}

  ngOnInit() {
    this.newlyweds=this.data.getnewlyWeds()
    this.venueDetails=this.data.getvenue()
    this.timeDetails=this.data.gettimedetails()
  }

  foo(e: any) {
    console.log(e);
  }
}
