import { Component, inject } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LanguageSelectorComponent } from 'src/app/shared/components/language-selector/language-selector.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private translocoService = inject(TranslocoService);
  private dialogService = inject(MatDialog);
  protected selectedLang$ = this.translocoService.langChanges$;

  protected openLanguageModal(): void {
    this.dialogService.open(LanguageSelectorComponent);
  }
}
