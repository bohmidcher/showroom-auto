import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auto } from '../auto';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css'
})
export class SearchBar {
  @Input() autos: Auto[] = [];

  marque: string = '';
  filteredAutos: Auto[] = [];

  @Output() selectAutoEvent = new EventEmitter<Auto>();

  searchAutoList(): void {
    this.filteredAutos = this.autos.filter(
      auto => auto.marque.toLowerCase() === this.marque.trim().toLowerCase()
    );
  }

  selectedAuto(auto: Auto): void {
    this.selectAutoEvent.emit(auto);
  }
}