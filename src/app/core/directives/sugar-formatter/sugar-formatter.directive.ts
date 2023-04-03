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
      const componentRef =
        this.viewContainerRef.createComponent<ZanothSugarToolComponent>(
          ZanothSugarToolComponent
        );

      componentRef.instance.node = node;
    });
  }
}
