import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ItemType } from 'src/app/db/item';
import { SanitizeModule } from 'src/app/shared/pipes/sanitization/sanitize.module';
import { TooltipModule } from '../tooltip/item-tooltip.module';

@Component({
  selector: 'zanoth-sugar-tool',
  templateUrl: './zanoth-sugar-tool.component.html',
  styleUrls: ['./zanoth-sugar-tool.component.scss'],
  imports: [CommonModule, TooltipModule, SanitizeModule],
  standalone: true,
})
export class ZanothSugarToolComponent implements OnInit {
  @Input() public node!: ChildNode;

  public childNodeIterable: Array<ChildNode | any> = [];

  public ngOnInit() {
    this.node.childNodes.forEach((node) => {
      this.childNodeIterable.push(node);
    });
  }
}
