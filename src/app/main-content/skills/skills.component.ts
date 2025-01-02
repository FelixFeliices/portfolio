import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss', './skills.responsive.component.scss'],
})
export class SkillsComponent {
  frontEndSkills: string[] = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Firebase',
    'Git',
    'Rest Api',
    'Scrum',
    'Material Design',
  ];
}
