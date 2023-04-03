import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
  ScrollStrategy,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Directive,
  ElementRef,
  HostListener,
  Injector,
  Input,
} from '@angular/core';
import { first, tap } from 'rxjs';
import { TooltipComponent } from 'src/app/shared/components/tooltip/tooltip.component';
import { TOOLTIP_DATA } from '../../providers/tooltip-data.provider';

@Directive({
  selector: '[zanothwikiTooltip]',
})
export class ItemTooltipDirective {
  @Input() showToolTip: boolean = true;
  @Input(`itemId`) itemId?: ChildNode;

  private _overlayRef!: OverlayRef;

  constructor(
    private _overlay: Overlay,
    private _overlayPositionBuilder: OverlayPositionBuilder,
    private _elementRef: ElementRef,
    private _injector: Injector,
    private readonly _sso: ScrollStrategyOptions
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

    this._overlayRef = this._overlay.create({
      positionStrategy,
      hasBackdrop: true,
      scrollStrategy: this._sso.reposition(),
    });
  }

  @HostListener('click')
  toggle() {
    if (this._overlayRef.hasAttached()) {
      // return;
    }

    const injector = Injector.create({
      parent: this._injector,
      providers: [{ provide: TOOLTIP_DATA, useValue: this.itemId }],
    });

    const portal = new ComponentPortal(TooltipComponent, null, injector);
    this._overlayRef.attach(portal);
    this._overlayRef
      .backdropClick()
      .pipe(
        first(),
        tap(() => {
          this.closeToolTip();
        })
      )
      .subscribe();
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
