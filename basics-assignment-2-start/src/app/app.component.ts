import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = ''

  // disableSubmitButton: boolean = this.username === '' ? true : false

  disableResetButton(): boolean {
    return this.username === ''
  }

  resetUsername(): void {
    this.username = ''
  }


}
