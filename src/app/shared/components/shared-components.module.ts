import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageSelectorModule } from './language-selector/language-selector.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { YoutubePlayerWrapperModule } from './youtube-player/youtube-player.module';

@NgModule({
  imports: [TranslocoModule, CommonModule],
  exports: [YoutubePlayerWrapperModule, LanguageSelectorModule],
  declarations: [TooltipComponent],
})
export class SharedComponentsModule {}
