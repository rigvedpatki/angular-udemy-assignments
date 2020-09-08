import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-success-alert',
  template: `
    <h2> This is success alert</h2>
  `,
  styles: [`
    h2 {
      padding: 20px;
      background-color: green;
      border: 1px solid limegreen;
      color: whitesmoke;
    }
  `]
})
export class SuccessAlertComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}