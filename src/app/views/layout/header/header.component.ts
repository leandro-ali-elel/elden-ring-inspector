import { Component, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private translocoService = inject(TranslocoService);

  protected changeLang(lang: 'jp' | 'es' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }
}
