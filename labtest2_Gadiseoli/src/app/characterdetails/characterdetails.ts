import { Component, Input } from '@angular/core';
import { CharacterModel } from '../models/character.model';

@Component({
  selector: 'app-characterdetails',
  standalone: true,
  imports: [],
  templateUrl: './characterdetails.html',
  styleUrl: './characterdetails.css',
})
export class Characterdetails {
  @Input() character: CharacterModel | null = null;
}
