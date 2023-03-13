import { Component, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Language } from 'src/app/core/models/language';

@Component({
  selector: 'zanothwiki-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  protected availableLangs: Language[] = [
    { languageDescription: 'commons.language.es', languageId: 'es' },
    { languageDescription: 'commons.language.en', languageId: 'en' },
    { languageDescription: 'commons.language.jp', languageId: 'jp' },
  ];
  private translocoService = inject(TranslocoService);

  protected changeLang(lang: 'jp' | 'es' | 'en'): void {
    this.translocoService.setActiveLang(lang);
  }
}
