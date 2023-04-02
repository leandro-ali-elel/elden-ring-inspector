import {
  Directive,
  ElementRef,
  inject,
  Input,
  Renderer2,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { ZanothSugarToolComponent } from './zanoth-sugar-tool.component';

@Directive({
  selector: '[sugarFormatter]',
})
export class SugarFormatterDirective {
  private viewContainerRef = inject(ViewContainerRef);
  @Input() sugarFormatter = '';

  ngOnInit(): void {
    const domParser = new DOMParser();
    const html = domParser.parseFromString(this.sugarFormatter, 'text/html');
    html.body.childNodes.forEach((node) => {
      const namedMap: NamedNodeMap = (node as any)['attributes'];
      const componentRef = this.viewContainerRef.createComponent(
        ZanothSugarToolComponent
      );
      if (namedMap?.getNamedItem('item-id')) {
        componentRef.instance.itemId = namedMap.getNamedItem('item-id')?.value!;
      }
      (componentRef.instance as ZanothSugarToolComponent).text =
        node.textContent!;
      return;
    });
  }
}

export type NODES = 'ZANOTHWIKITOOLTIP' | any;
