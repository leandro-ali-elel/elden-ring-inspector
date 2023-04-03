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
    this.renderNodes(html.body.childNodes);
  }

  private renderNodes(nodes: NodeListOf<ChildNode>): void {
    nodes.forEach((node) => {
      if (node.childNodes.length > 1) {
        this.renderNodes(node.childNodes);
        return;
      }

      const componentRef = this.viewContainerRef.createComponent(
        ZanothSugarToolComponent
      );
      (componentRef.instance as ZanothSugarToolComponent).type = node.nodeName;
      (componentRef.instance as ZanothSugarToolComponent).text =
        node.textContent!;
      if (node.nodeName === 'ZANOTHWIKITOOLTIP') {
        const namedMap: NamedNodeMap = (node as any)['attributes'];
        componentRef.instance.itemId = namedMap.getNamedItem('item-id')?.value!;
      }
    });
  }
}

export type NODES = 'ZANOTHWIKITOOLTIP' | any;
