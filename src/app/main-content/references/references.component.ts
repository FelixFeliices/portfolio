import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './references.component.html',
  styleUrls: [
    './references.component.scss',
    './references.responsive.component.scss',
  ],
})
export class ReferencesComponent {
  references: any[] = [
    {
      name: 'Antoine',
      img: 'quelle',
    },
    {
      name: 'Hiroshi',
      img: 'quelle',
    },
    {
      name: 'Dimitri',
      img: 'quelle',
    },
    {
      name: 'Romina',
      img: 'quelle',
    },
  ];

  currentIndex: number = Math.floor(Math.random() * this.references.length);
  isChanging: boolean = false;

  back() {
    this.currentIndex =
      (this.currentIndex - 1 + this.references.length) % this.references.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.references.length;
  }
}
