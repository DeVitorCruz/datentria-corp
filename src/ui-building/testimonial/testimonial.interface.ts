import { TextBox } from '../../app/shared/ui/text-box/text-box-item.interface';
import { MediaImg } from '../../app/core/models/media/media-img.interface';

export interface TestimonialSlide {
	quote: string;
	author: string;
	role: string;
}

export interface TestimonialContent {
	header: TextBox[]; // Title + subtitle -> TextBoxComponent
	image: MediaImg; // photo -> ImgFlex
	slides: TestimonialSlide[]; // quotes -> SlideComponent (built internall)
}

