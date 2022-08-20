import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  heroes$: any;
  selectedHero = emptyHero;
  originalAlias = '';

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.fetchHeros();
  }

  selectHero(hero) {
    this.selectedHero = hero;
  }

  fetchHeros() {
    this.heroes$ = this.heroesService.all();
  }

  saveHero(hero) {
    if (hero.id) {
      this.updateHero(hero);
    } else {
      this.createHero(hero);
    }
  }

  createHero(hero) {
    this.heroesService.create(hero).subscribe((result) => this.fetchHeros());
  }

  updateHero(hero) {
    this.heroesService.update(hero).subscribe((result) => this.fetchHeros());
  }

  deleteHero(heroId) {
    console.log('DELETE HERO', heroId);
  }

  reset() {
    this.selectHero({ ...emptyHero });
  }
}
