import { ContainerBlock } from "../../shared/ui/container/container-block.interface";
import { FlexCollectionItem } from "../../shared/ui/flex-collection/flex-collection-item.interface";
import { CARD_TRACK } from "./card-track/CARD_TRACK";
import { COLLECTION_CARD } from "./collection-card/COLLECTION_CARD";
import { COLLECTION_INFO } from "./collection-info/COLLECTION_INFO";
import { DETACHED_ELEMENT } from "./detached-element/DETACHED_ELEMENT";
import { HomeConfig } from "./home-config.interface";
import { STATIC_HERO } from "./static-hero/STATIC_HERO";
import { TEXT_IMAGE } from "./text-image/TEXT_IMAGE";
import { TestimonialContent } from '../../../ui-building/testimonial/testimonial.interface';
import { MediaImg } from '../../core/models/media/media-img.interface';

const TESTIMONIAL_CONTENT: TestimonialContent = {
    header: [
		{
			id: 0,
			heading: { id: 0, headingType: 'h2', text: 'Trusted From Clients' },
			text: ['Neque convallis a cras semper auctor. Adipiscing elit ut aliquam purus sit amet luctus.'] 
		}
    ],
    image: {
		src: 'assets/themes/web/compositions/ecommerce-blog/jewelry/luxury/home/main/text-image/content-wrap/image-wrap/trastimonial-image.jpg',
		alt: 'testimonial image'
	} as MediaImg,
	slides: [
		{
			quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
			author: 'Jennifer Lopez',
			role: 'Happy Customer'
		},
		{
			quote: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
			author: 'Jennifer Lopez',
			role: 'Happy Customer'
		},
		{
			quote: 'Neque convallis a cras semper auctor. Adipiscing elit ut aliquam purus sit amet luctus. Mauris vitae ultricies leo integer.',
			author: 'Michael Brown',
			role: 'Happy Customer'
		},
	]		
};


export const HOME_CONFIG: HomeConfig = {
    staticHero: STATIC_HERO as ContainerBlock,
    cardTrack: CARD_TRACK as ContainerBlock,
    collection: COLLECTION_CARD as FlexCollectionItem,
    detachedElement: DETACHED_ELEMENT as ContainerBlock,
    textImage: TEXT_IMAGE as ContainerBlock,
    testimonial: TESTIMONIAL_CONTENT,
    collectionInfo: COLLECTION_INFO as ContainerBlock,
};
