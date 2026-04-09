import { Component, OnInit, signal } from '@angular/core';
import { Character } from '../services/character';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Characterfilter } from '../characterfilter/characterfilter';
import { Characterdetails } from '../characterdetails/characterdetails';
import { CharacterModel } from '../models/character.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-characterlist',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    Characterfilter, 
    Characterdetails,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  templateUrl: './characterlist.html',
  styleUrl: './characterlist.css',
})

export class Characterlist implements OnInit {

  characters: CharacterModel[] = [];
  filteredCharacters: CharacterModel[] = [];
  searchText: string = '';
  selectedCharacter = signal<CharacterModel | null>(null);

  constructor(private characterService: Character) {}

  ngOnInit(): void {
    this.characterService.getAllCharacters().subscribe(data => {
      this.characters = data;
      this.filteredCharacters = data;
    });
  }

  search() {
    this.filteredCharacters = this.characters.filter(char => 
      char.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filterByHouse(house: string) {
    if (!house) {
      this.filteredCharacters = this.characters;
    } else {
      this.filteredCharacters = this.characters.filter(char => char.house === house);
    }
  }

  showDetails(character: CharacterModel) {
    this.selectedCharacter.set(character);
  }
}
