import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  heroes: Hero[] = [
    {
      id: '1',
      alias: 'Superman',
      description:
        'Clark Kent thinks he is slick without wearing a mask to hide his identity. We are on to him.',
    },
    {
      id: '2',
      alias: 'Batman',
      description:
        'This guy thinks he is a superhero without any special powers.',
    },
  ];
  constructor() {}
}
