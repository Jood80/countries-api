import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly API_KEY = '';
  readonly BASE_URL = `http://api.countrylayer.com/v2/all?access_key=${this.API_KEY}`;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.BASE_URL);
  }
}
