import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'peer-review-demo';
  constructor() {
    setTheme('bs5');
  }
}
