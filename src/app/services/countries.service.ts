import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Country } from '../models/country-api';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${environment.BASE_URL}/all`);
  }

  getCountry(name: string): Observable<any> {
    return this.http
      .get<Country[]>(`${environment.BASE_URL}/name/${name}`)
      .pipe(
        map(([res]) => res),
        catchError(this.handleError<Country[]>(`getCountry name=${name}`))
      );
  }

  getCountryBorder(codes: string[]): Observable<Country[]> {
    return this.http.get<Country[]>(
      `${environment.BASE_URL}/alpha?codes=${codes?.join(',')}`
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
