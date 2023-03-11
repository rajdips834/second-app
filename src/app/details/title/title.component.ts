import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Newlyweds } from 'src/interfaces/newlywed';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
 @Input() newlyweds?:Newlyweds
 @Output() shimmers : EventEmitter<any> = new EventEmitter<any>()

 onNameHover(e: any) {
      this.shimmers.emit(e);
  }
}
