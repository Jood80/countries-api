import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/interfaces/api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private rawCountries: Country[] = [];
  isLoading: boolean = true;
  searchFilter?: string;

  constructor(private countryService: CountriesService) {}

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(): void {
    this.countryService.getAllCountries().subscribe((res) => {
      this.rawCountries = res;
      this.isLoading = false;
    });
  }

  get countries() {
    return this.rawCountries
      ? this.rawCountries.filter((country) =>
          this.searchFilter
            ? country.name.common
                .toLowerCase()
                .includes(this.searchFilter.toLowerCase())
            : country
        )
      : this.rawCountries;
  }
}
