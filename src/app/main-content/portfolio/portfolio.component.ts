import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: [
    './portfolio.component.scss',
    './portfolio.responsive.component.scss',
  ],
})
export class PortfolioComponent {}
