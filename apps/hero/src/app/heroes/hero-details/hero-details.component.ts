import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../../common/models/hero';

@Component({
  selector: 'tour-of-heroes-app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss'],
})
export class HeroDetailsComponent {
  currentHero: Hero;
  originalAlias = '';

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set hero(value) {
    if (!value) return;
    this.currentHero = { ...value };
    this.originalAlias = this.currentHero.alias;
  }
}
