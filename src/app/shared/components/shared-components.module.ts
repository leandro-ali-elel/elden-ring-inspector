import { NgModule } from '@angular/core';
import { LanguageSelectorModule } from './language-selector/language-selector.module';
import { YoutubePlayerWrapperModule } from './youtube-player/youtube-player.module';

@NgModule({
  imports: [],
  exports: [YoutubePlayerWrapperModule, LanguageSelectorModule],
  declarations: [],
})
export class SharedComponentsModule {}
