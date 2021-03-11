import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BestiaryService {
  private ROOT_URL = 'https://www.dnd5eapi.co';

  constructor(
    private http: HttpClient
  ) { }

  getBeasts(): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`${this.ROOT_URL}/api/monsters`)
  }
  
  getBeastDetail(beastURL: string): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`${this.ROOT_URL}${beastURL}`);
  }
}
