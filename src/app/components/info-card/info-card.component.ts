import { Component, Input } from '@angular/core';
import { CardConfig } from 'src/app/interfaces/card-config';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input() cardClass: string = '';
  @Input() cardConfig?: CardConfig;

}
