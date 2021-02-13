import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {

  constructor(
    private http: HttpClient
  ) { }

  getSpells(): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`https://www.dnd5eapi.co/api/spells`);
  }
}
