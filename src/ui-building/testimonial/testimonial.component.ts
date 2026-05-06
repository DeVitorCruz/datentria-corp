import { Component, input, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TestimonialContent } from './testimonial.interface';
import { TextBoxComponent } from '../../app/shared/ui/text-box/text-box.component';
import { ImgFlex } from '../../app/shared/ui/img-flex/img-flex.component';
import { SlideComponent } from '../../app/shared/ui/side-slide/slide.component';
import { SlidItem } from '../../app/shared/ui/side-slide/slide-item.interface';
import { SlideSwiperScreen } from '../../app/shared/ui/side-slide/slide-swiper-screen.interface';
import { SwiperButton } from '../../app/shared/ui/side-slide/slide-next-button.interface';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
	selector: 'app-testimonial',
	standalone: true,
	imports: [TextBoxComponent, ImgFlex, SlideComponent],
	templateUrl: './testimonial.component.html',
	styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent implements OnInit {
	public readonly CONTENT = input.required<TestimonialContent>();
	public readonly IS_BROWSER = signal<boolean>(false);
	public slideItem!: SlidItem;
	
	constructor(@Inject(PLATFORM_ID) private platformId: Object) {
		this.IS_BROWSER.set(isPlatformBrowser(this.platformId));
	}
	
	public ngOnInit(): void {
		this.slideItem = this._buildSlideItem();
	}
	
	/**
	 * Builds the SlidItem from TestimonialSlide[] using TextBoxComponent
	 * for each slide screen - fully reusing the shared slide system.
	 */
	private _buildSlideItem(): SlidItem {
		const slideList: SlideSwiperScreen[] = this.CONTENT().slides.map(
			(slide, index) => ({
					id: index,
					swiperComponent: TextBoxComponent,
					swiperInput: {
						TEXT_BOX_LIST: [
							{
								id: 0,
								text: [slide.quote],
								customBlockClassName: 'testimonial-quote',
							},
							{
								id: 1,
								heading: {
									id: 0,
									headingType: 'h4',
									text: slide.author,
								},
								text: [slide.role],
								customBlockClassName: 'testimonial-author',
							}
						]
					}
			})
		);
		
		const buttonList: SwiperButton[] = [
			{
				id: 0,
				type: 'button',
				iconType: { type: 'none' },
				customClassName: ['ui-button--clickable'],
				classNameSwiper: 'swiper-button-prev',
				buttonEventListenerList: [], 
			},
			{
				id: 1,
				type: 'button',
				iconType: { type: 'none' },
				customClassName: ['ui-button--clickable'],
				classNameSwiper: 'swiper-button-next',
				buttonEventListenerList: [],
			}
		];
		
		return {
			containerClassName: 'testimonial-swiper',
			slideConfig: {
				modules: [Navigation, Pagination],
				slidesPerView: 1,
				loop: true,
				effect: 'fade',
				pagination: { el: '.swiper-pagination', clickable: true },
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			},
			swiperSlideList: slideList,
			buttonList,
		};
	}
}
