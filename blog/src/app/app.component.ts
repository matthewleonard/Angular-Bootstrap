import { Component } from '@angular/core';
import {Image} from './image.interface';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig]
})
export class AppComponent {
  title = 'Matthew Leonard\'s blog';
  images = IMAGES;
  showNavigationArrows = false;
  showNavigationIndicators = false;

  constructor(config: NgbCarouselConfig){
    config.interval = 8000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
}



var IMAGES: Image[] = [
  { "title": "We are covered", "url": "../assets/img/quality/getting-started-with-javascript.png" },
  { "title": "We got this", "url": "../assets/img/quality/keyboard-on-desk.jpeg" },
  { "title": "I did this", "url": "../assets/img/quality/web-design-and-development.jpg" }
];
