import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/models/hero';

const emptyHero: Hero = {
  id: null,
  alias: '',
  description: '',
};

@Component({
  selector: 'tour-of-heroes-app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes = [
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

  selectedHero = emptyHero;
  originalAlias = '';

  constructor() {}

  ngOnInit(): void {}

  selectHero(hero) {
    this.selectedHero = { ...hero };
    this.originalAlias = hero.alias;
  }

  saveHero(hero) {
    console.log('SAVE HERO', hero);
  }

  deleteHero(heroId) {
    console.log('DELETE HERO', heroId);
  }

  reset() {
    this.selectHero({ ...emptyHero });
  }
}
