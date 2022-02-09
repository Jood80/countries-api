import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Country } from '../interfaces/api';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  readonly BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.BASE_URL}/all`);
  }

  getCountry(name: string): Observable<Country[]> {
    return this.http
      .get<Country[]>(`${this.BASE_URL}/name/${name}`)
      .pipe(catchError(this.handleError<Country[]>(`getCountry name=${name}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
