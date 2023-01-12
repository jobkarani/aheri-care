import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'count-to',
  templateUrl: './count-to.component.html',
  styleUrls: ['./count-to.component.css']
})
export class CountToComponent implements OnInit{
  @Input() countTo: number = 0;
  @Input() countFrom: number = 0;
  currentCount: number;

  constructor() {
    this.currentCount = this.countFrom ++;
  }

  ngOnInit(): void {
    const intervalId = setInterval(() => {
      if (this.currentCount < this.countTo) {
          this.currentCount++;
      } else {
          clearInterval(intervalId);
      }
  }, 5);
  }
}