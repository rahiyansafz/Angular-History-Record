import { Component } from '@angular/core';

import { Assessment } from './interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  name = 'Angular';

  data: Assessment[] = [
    {
      id: '1',
      state: 'ACCEPT',
      date: new Date().toDateString(),
      text: 'The documents will give people around the world an unprecedented insight into US Government foreign activities.',
      assignee: 'Jhon Go',
    }, {
      id: '2',
      state: 'INVALID',
      date: new Date().toDateString(),
      text: 'The documents will give people around the world an unprecedented insight into US Government foreign activities.',
      assignee: 'Jhon Back',
    }, {
      id: '3',
      state: 'INCOMPLETE',
      date: new Date().toDateString(),
      text: 'The documents will give people around the world an unprecedented insight into US Government foreign activities.',
      assignee: 'Jhon Go',
    }
  ]
}
