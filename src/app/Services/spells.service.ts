import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  private ROOT_URL = 'https://www.dnd5eapi.co';

  constructor(
    private http: HttpClient
  ) { }

  getSpells(): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`${this.ROOT_URL}/api/spells`);
  }

  getSpell(spellUrl: string): Observable<any | HttpErrorResponse> {
    return this.http.get<any>(`${this.ROOT_URL}${spellUrl}`);
  }
}
