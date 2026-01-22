import { Routes } from "@angular/router";
import { BannerBindRoute } from "./banner-bind-route";
import { AboutPage } from "../about/about.page";
import { FlexCardItem } from "../../shared/ui/flex-card/flex-card-item";
import { MediaImg } from "../../core/models/media/media-img.interface";
import { TextBox } from "../../shared/ui/text-box/text-box-item.interface";
import { FlexHeadingItem } from "../../shared/ui/flex-heading/flex-heading-item";

export const BANNER_BIND_ROUTER: Routes = [
    {
        path: '',
        component: BannerBindRoute,
        children: [
            {
                path: 'about',
                component: AboutPage,
                data: {
                    flexCardItem: {
                        id: 0,
                        head: {
                                src: '',
                                alt: '',
                            } as MediaImg,
                        body: [
                            {
                                id: 0,
                                heading: {
                                    id: 0,     
                                    headingType: 'h2',
                                    text: 'ABOUT US',
                                } as FlexHeadingItem,
                            } as TextBox],
                    } as FlexCardItem,
                    breadcrumb: 'about'
                }
            }
        ],
    }
];