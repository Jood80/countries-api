import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Country } from 'src/app/interfaces/api';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  countryDetails: Country;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private countryService: CountriesService
  ) {}

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry(): any {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.countryService
        .getCountry(name)
        .subscribe((country) => (this.countryDetails = country[0]));
    }
  }

  goBack() {
    this.location.back();
  }
}