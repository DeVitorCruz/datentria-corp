import { Component, computed, inject, OnDestroy, signal } from '@angular/core';
import { FlexCardComponent } from '../../shared/ui/flex-card/flex-card.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlexCardItem } from '../../shared/ui/flex-card/flex-card-item';  
import { BreadCrumbComponent } from '../../shared/ui/bread-crumb/bread-crumb.component';
import { TAILWIND_BREAD_CRUMB } from './tailwindCollect/TAILWIND_BREAD_CRUMB';

@Component({
  selector: 'app-banner-bind-router',
  imports: [
    FlexCardComponent,
    RouterOutlet,
    BreadCrumbComponent
  ],
  templateUrl: './banner-bind-route.html',
})
export class BannerBindRoute implements OnDestroy {
  private readonly ROUTE = inject(ActivatedRoute);
  private readonly FLEX_CARD_ITEM = signal<FlexCardItem | null>(null);
  public readonly CARD_ITEM = computed(() => { return this.FLEX_CARD_ITEM(); });
  private sub?: Subscription;

  public readonly TAILWIND_BREAD_CRUMB: string[] = TAILWIND_BREAD_CRUMB;

  constructor() {
    this.sub = this.ROUTE.data.subscribe(() => {
      let route: ActivatedRoute = this.ROUTE;

      while(route.firstChild) {
        route = route.firstChild;
      }

      route.data.subscribe((data) => {
        const DATA = data['flexCardItem'] as FlexCardItem;
        this.updateBannerData(DATA);
      });
    });
  }

  private updateBannerData(dataItem?: FlexCardItem): void {
    if (!dataItem) return; 

    this.FLEX_CARD_ITEM.set(dataItem);
  }

  public ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
