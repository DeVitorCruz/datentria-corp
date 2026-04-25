import { Component, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcumbItem } from './breadcrumbItem.interface';

@Component({
  selector: 'app-page-title-banner',
  imports: [RouterLink],
  templateUrl: './page-title-banner.component.html',
  styleUrl: './page-title-banner.component.scss'
})
export class PageTitleBannerComponent {
	public readonly TITLE = input.required<string>();
	public readonly BREADCRUMBS = input<BreadcumbItem[]>([]);
	public readonly BG_IMAGE = input<string>('');
	
	public readonly _BREADCUMBS = computed(() => this.BREADCRUMBS());
	public readonly _TITLE = computed(() => this.TITLE());
	public readonly _BG_IMAGE = computed(() => this.BG_IMAGE());
}
