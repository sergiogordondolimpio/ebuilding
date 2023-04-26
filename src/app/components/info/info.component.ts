import { Component } from '@angular/core';
import { CARDS_INFO_CONFIG } from 'src/app/data/cards-config';
import { CardConfig } from 'src/app/interfaces/card-config';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  cards: CardConfig[] = CARDS_INFO_CONFIG;

}
