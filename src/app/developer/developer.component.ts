import { Component, Input  } from '@angular/core';
import { Developer } from '../models/developer.model';




@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

developer = new Developer (
    'Wallet',
    'Christophe',
    42,
    'M',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ac lacinia nibh, nec faucibus enim. Nullam quis lorem posuere, hendrerit tellus eget.',
    [
      {name: 'Angular', logo: "angular.svg", site: 'https://angular.io/'},
      {name: 'CSS', logo: 'CSS.3..png', site: 'https://developer.mozilla.org/fr/docs/Web/CSS'},
      {name: 'HTML', logo: 'HTML5.png', site: 'https://developer.mozilla.org/fr/docs/Web/HTML'},
    ]
  );
}

