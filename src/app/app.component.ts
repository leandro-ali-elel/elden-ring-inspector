import { Component } from '@angular/core';
import { ASHES } from './db/ashes';
import { inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected ashes = ASHES;
  private translocoService = inject(TranslocoService);

  protected changeLang(lang: 'jp' | 'es' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }
}
