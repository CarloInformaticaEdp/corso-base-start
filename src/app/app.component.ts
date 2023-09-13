import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  private dev = 'CARLO';
  name = 'Angular ' + VERSION.major;
}
