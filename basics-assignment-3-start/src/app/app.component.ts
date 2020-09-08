import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  count: number = 0

  hiddenStatus: boolean = false

  logs: Array<Log> = []

  toggleButton(): void {

    this.count++;

    let log: Log = {
      count: this.count,
      timestamp: new Date(),
      hiddenStatus: this.hiddenStatus
    };

    this.logs.push(log);

    this.hiddenStatus = !this.hiddenStatus;

  }

  getStyle(count): Object {
    if (count > 5) {
      return {
        backgroundColor: 'dodgerblue',
        margin: '.5rem',
        padding: '.5rem'
      }
    } else {
      return {
        margin: '.5rem',
        padding: '.5rem'
      }
    }
  }
}

export interface Log {
  count: number
  timestamp: Date
  hiddenStatus: boolean
}