import { TextBox } from "@shared/ui/text-box/text-box-item.interface";
import { MediaImg } from "@core/models/media/media-img.interface";

export interface CardItem {
    id: number;
    image: MediaImg;
    content: TextBox[];
    customClassName?: string[];
    link?: string;
}

export interface CardGridContent {
    header: TextBox[];
    cards: CardItem[];
    gridClassName?: string;
    sectionClassName?: string;
}