import { Component, Injectable, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html'
})

@Injectable()
export class ClockComponent implements OnInit {
  currentTime: string;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
    }, 1000);
  }
}
