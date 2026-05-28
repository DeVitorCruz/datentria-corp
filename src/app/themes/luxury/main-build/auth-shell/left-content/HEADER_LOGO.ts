import { MediaImg } from "@core/models/media/media-img.interface";
import { ImgFlex } from "@shared/ui/img-flex/img-flex.component";
import { SequenceSpaceItem } from "@shared/ui/sequence-space/sequence-space-item";

export const HEADER_LOGO: SequenceSpaceItem = {
    id: 0,  
    customClassName: [] as string[],
    component: ImgFlex,
    componentInput: {
        IMAGE_FLEX_ITEM: {
            src: 'assets/collection-info/logo.svg',
            alt: 'Logo',
        } as MediaImg,
    },
} as SequenceSpaceItem;