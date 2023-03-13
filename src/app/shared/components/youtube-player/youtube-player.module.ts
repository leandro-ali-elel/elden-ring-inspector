import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SanitizeModule } from '../../pipes/sanitization/sanitize.module';
import { YoutubePlayerComponent } from './youtube-player.component';

@NgModule({
  declarations: [YoutubePlayerComponent],
  imports: [CommonModule, SanitizeModule, YouTubePlayerModule],
  exports: [YoutubePlayerComponent],
})
export class YoutubePlayerWrapperModule {}
