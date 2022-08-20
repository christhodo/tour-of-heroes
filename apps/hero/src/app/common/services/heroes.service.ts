import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  HeroEnvironment,
  HERO_ENVIRONMENT,
} from '@tour-of-heroes-app/environment';
import { Hero } from '../models/hero';

const BASE_URL = 'https://thirty-by-thirty-app.herokuapp.com';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  model = 'heroes';

  constructor(
    private http: HttpClient,
    @Inject(HERO_ENVIRONMENT) private environment: HeroEnvironment
  ) {}

  all() {
    return this.http.get<Hero[]>(this.getUrl());
  }

  find(id) {
    return this.http.get<Hero>(this.getUrlWithID(id));
  }

  create(hero) {
    return this.http.post<Hero>(this.getUrl(), hero);
  }

  update(hero) {
    return this.http.put<Hero>(this.getUrlWithID(hero.id), hero);
  }

  delete(id) {
    return this.http.delete<Hero>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id) {
    return `${this.getUrl()}/${id}`;
  }
}
