import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countryService
      .getAllCountries()
      .subscribe((res) => (this.countries = res));
  }
}
