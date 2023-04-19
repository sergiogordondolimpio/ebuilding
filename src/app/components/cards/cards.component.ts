import { Component } from '@angular/core';
import { CARDS_CONFIG } from 'src/app/data/cards-config';
import { CardConfig } from 'src/app/interfaces/card-config';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  cards: CardConfig[] = CARDS_CONFIG;

}
