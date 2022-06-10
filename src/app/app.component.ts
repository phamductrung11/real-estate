import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {

  title = 'real-estate';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('thay đổi ở master');
    console.log('simplechang:',changes)
  }
}
