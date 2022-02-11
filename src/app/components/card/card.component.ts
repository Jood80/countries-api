import { Component, Input } from '@angular/core';
import { Country } from 'src/app/models/country-api';

@Component({
  selector: 'app-country-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() country: Country;
}
