import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TOOLTIP_DATA } from '../../providers/tooltip-data.provider';

@Directive({
  selector: '[zanothwikiTooltip]',
})
export class ItemTooltipDirective {
  @Input() showToolTip: boolean = true;
  @Input(`itemId`) itemId?: string;

  private _overlayRef!: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private _injector: Injector
  ) {}

  ngOnInit(): void {
    if (!this.showToolTip) {
      return;
    }

    const positionStrategy = this._overlayPositionBuilder
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'center',
          originY: 'bottom',
          overlayX: 'center',
          overlayY: 'top',
          offsetY: 5,
        },
      ]);

    this._overlayRef = this._overlay.create({ positionStrategy });
  }

  @HostListener('mouseenter')
  show() {
    const injector = Injector.create({
      parent: this._injector,
      providers: [{ provide: TOOLTIP_DATA, useValue: this.itemId }],
    });

    const portal = new ComponentPortal(TooltipComponent, null, injector);
    this._overlayRef.attach(portal);
  }

  @HostListener('mouseleave')
  hide() {
    this.closeToolTip();
  }

  ngOnDestroy() {
    this.closeToolTip();
  }

  private closeToolTip() {
    if (this._overlayRef) {
      this._overlayRef.detach();
    }
  }
}
