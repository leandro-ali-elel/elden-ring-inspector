import { inject, Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitize',
})
export class SanitizePipe implements PipeTransform {
  private sanitization = inject(DomSanitizer);
  transform(value: string | undefined, context: SecurityContext): SafeHtml {
    if (!value || !context) {
      return this.sanitization.bypassSecurityTrustHtml('');
    }

    switch (context) {
      case SecurityContext.HTML:
        return this.sanitization.bypassSecurityTrustHtml(value);
      case SecurityContext.STYLE:
        return this.sanitization.bypassSecurityTrustStyle(value);
      case SecurityContext.SCRIPT:
        return this.sanitization.bypassSecurityTrustScript(value);
      case SecurityContext.URL:
        return this.sanitization.bypassSecurityTrustUrl(value);
      default:
        return this.sanitization.bypassSecurityTrustResourceUrl(value);
    }
  }
}
