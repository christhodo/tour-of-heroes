import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Hero } from '../../common/models/hero';

@Component({
  selector: 'tour-of-heroes-app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
})
export class HeroesListComponent {
  @Input() heroes: Hero[] = [];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
