import { Component, OnInit } from '@angular/core';

import { Country } from 'src/app/models/api';
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
  regionFilter?: string;

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

  getSelectedRegion($event: string) {
    this.regionFilter = $event;
  }

  get countries() {
    return this.rawCountries
      ? this.rawCountries
          .filter((country) =>
            this.searchFilter
              ? country.name.common
                  .toLowerCase()
                  .includes(this.searchFilter.toLowerCase())
              : country
          )
          .filter((country) =>
            this.regionFilter
              ? country.region.includes(this.regionFilter)
              : country
          )
      : this.rawCountries;
  }
}
