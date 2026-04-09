import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterModel } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class Character {

  private apiUrl = 'https://hp-api.onrender.com/api/characters';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<CharacterModel[]> {
    return this.http.get<CharacterModel[]>(this.apiUrl);
  }
}
