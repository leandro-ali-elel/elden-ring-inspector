import { Component, OnInit } from '@angular/core';
import { SCRIPTS } from 'src/app/db/scripts';

@Component({
  selector: 'app-scripts',
  templateUrl: './scripts.component.html',
  styleUrls: ['./scripts.component.scss'],
})
export class ScriptsComponent {
  protected scripts = SCRIPTS;
}
