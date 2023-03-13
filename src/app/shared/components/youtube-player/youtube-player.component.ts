import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
@Component({
  selector: 'zanothwiki-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss'],
})
export class YoutubePlayerComponent implements OnInit {
  @Input() public videoId? = '';
  @ViewChild('youtubePlayer') youtubePlayer!: YouTubePlayer;

  private apiLoaded = false;

  public ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }

  public ngAfterViewInit(): void {
    // this.youtubePlayer.ready.subscribe({
    //   next: () => {
    //   },
    // });
  }
}
