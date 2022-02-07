import { Component, Input, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() country: Country;
}
