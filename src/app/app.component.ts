import { Component, OnInit } from '@angular/core';
import { mainCards, specialCards } from './data';

import { Card, SpecialCard } from './card.model';

@Component({
    selector: 'app-root',
    imports: [],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  monsters: Card[] = [];
  specialMonsters: SpecialCard[] = [];

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    const miltiplier: number = 1;
    const nrOfCardsOnPage: number = 6;
    const end: number = miltiplier * nrOfCardsOnPage;
    const start: number = end - nrOfCardsOnPage;

    this.monsters = mainCards.slice(start, end);
    if (this.monsters.length <= 3) {
      this.specialMonsters = specialCards;
    }
  }
}
