import { Component, OnInit } from '@angular/core';
import { Hero } from '../common/models/hero';
import { HeroesService } from '../common/services/heroes.service';

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
  heroes = [];
  selectedHero = emptyHero;
  originalAlias = '';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.heroes;
  }

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
