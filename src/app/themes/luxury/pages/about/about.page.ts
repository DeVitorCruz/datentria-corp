import { Component } from '@angular/core';
import { TestimonialComponent } from '@ui-building/testimonial/testimonial.component';
import { AboutConfig } from './about-config.interface';
import { ABOUT_CONFIG } from './ABOUT_CONFIG';

@Component({
  selector: 'app-about',
  imports: [TestimonialComponent],
  templateUrl: './about.page.html'
})
export class AboutPage {
  public readonly CONFIG: AboutConfig = ABOUT_CONFIG;
}
