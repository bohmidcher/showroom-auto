import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeadBar } from './head-bar/head-bar';
import { SearchBar } from './search-bar/search-bar';
import { Auto } from './auto';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeadBar, SearchBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  autoList: Auto[] = [
  {
    marque: 'Audi',
    modele: 'A3',
    prix: 120000,
    puissance: 150,
    photo: 'images/A3.webp',
    nombreUnites: 4
  },
  {
    marque: 'Mercedes',
    modele: 'Classe C',
    prix: 180000,
    puissance: 204,
    photo: 'images/CLASS-C.webp',
    nombreUnites: 3
  },
  {
    marque: 'BMW',
    modele: 'X2',
    prix: 160000,
    puissance: 190,
    photo: 'images/X2.webp',
    nombreUnites: 2
  }
];

  selectedAuto: Auto | null = null;

  updateAuto(auto: Auto): void {
    this.selectedAuto = auto;
  }
}