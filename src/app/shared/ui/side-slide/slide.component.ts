import { Swiper } from 'swiper';
import { isPlatformBrowser, NgComponentOutlet } from '@angular/common';
import { Component, computed, Inject, input, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { SlidItem } from './slide-item.interface';
import { ButtonFlex } from '../button/button.component';


@Component({
  selector: 'app-slide',
  imports: [
    ButtonFlex,
    NgComponentOutlet
],
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  public swiper!: Swiper;
  public readonly IS_BROWSER = signal<boolean>(true);
  public readonly SLIDE_ITEM = input.required<SlidItem>();
  public readonly SLIDE = computed(() => { return this.SLIDE_ITEM(); });

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.IS_BROWSER.set(isPlatformBrowser(this.platformId));
  }
  
  public ngOnInit(): void {
    this.setSwiper();
  }

  public setSwiper(): void {
    if (!this.IS_BROWSER()) {
      return;
    }

    const CONTAINER: string = `.${this.SLIDE().containerClassName}`;
    const OPTION = this.SLIDE().slideConfig;

    this.swiper = new Swiper(CONTAINER, OPTION);
  }
}
