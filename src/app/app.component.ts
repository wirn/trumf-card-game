import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { mainCards, specialCards } from './data';
import { CommonModule } from '@angular/common';
import { Card, SpecialCard } from './card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  monsters: Card[] = [];
  specialMonsters: SpecialCard[] = [];

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    const miltiplier: number = 8;
    const nrOfCardsOnPage: number = 6;
    const end: number = miltiplier * nrOfCardsOnPage;
    const start: number = end - nrOfCardsOnPage;

    this.monsters = mainCards.slice(start, end);
    if (this.monsters.length <= 3) {
      this.specialMonsters = specialCards;
    }
  }
}
