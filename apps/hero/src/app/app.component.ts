import { Component } from '@angular/core';

@Component({
  selector: 'tour-of-heroes-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hero';
  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/heroes', icon: 'view_list', title: 'Heroes' },
  ];
}
