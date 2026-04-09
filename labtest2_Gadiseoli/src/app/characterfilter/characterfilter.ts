import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-characterfilter',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './characterfilter.html',
  styleUrl: './characterfilter.css',
})
export class Characterfilter {
  @Output() houseSelected = new EventEmitter<string>();

  selectedHouse: string = '';

  houses: string[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

  onHouseChange() {
    this.houseSelected.emit(this.selectedHouse)
  }
}
