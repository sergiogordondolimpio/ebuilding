import { Component } from '@angular/core';
import { CARDS_CONFIG } from 'src/app/data/cards-line-config';

@Component({
  selector: 'app-cards-line',
  templateUrl: './cards-line.component.html',
  styleUrls: ['./cards-line.component.scss']
})
export class CardsLineComponent {

  cards = CARDS_CONFIG;

}
