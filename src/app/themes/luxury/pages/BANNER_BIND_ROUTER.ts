import { Routes } from "@angular/router";
import { BannerBindRoute } from "@pages/shared/banner-bind-route/banner-bind-route";
import { AboutPage } from "@themes/luxury/pages/about/about.page";
import { FlexCardItem } from "@shared/ui/flex-card/flex-card-item";
import { MediaImg } from "@core/models/media/media-img.interface";
import { TextBox } from "@shared/ui/text-box/text-box-item.interface";
import { FlexHeadingItem } from "@shared/ui/flex-heading/flex-heading-item";
import { ShopPage } from "./shop/shop.page";
import { CheckoutPage } from "./checkout/checkout.page";
import { CartPage } from "./cart/cart.page";
import { WishlistPage } from "./wishlist/wishlist.page";
import { OrderPage } from "./order/order.page";
import { FaqPage } from "./faq/faq.page";
import { TeamPage } from "./team/team.page";
import { TeamSinglePage } from "./team-single/team-single.page";
import { BlogPage } from "./blog/blog.page";
import { BlogSinglePage } from "./blog-single/blog-single.page";
import { ContactPage } from "./contact/contact.page";
import { Error404Page } from "./error-404/error-404.page";
import { ShopSinglePage } from "./shop-single/shop-single.page";

const BANNER_HEAD: MediaImg = { src: '', alt: '' };

const MAKER_BANNER = (title: string): FlexCardItem => ({
    id: 0,
    head: BANNER_HEAD as MediaImg,
    body: [
        {
            id: 0,
            heading: {
                id: 0,     
                headingType: 'h2',
                text: title,
            } as FlexHeadingItem,
        } as TextBox
    ],
});

export const BANNER_BIND_ROUTER: Routes = [
    {
        path: '',
        component: BannerBindRoute,
        children: [
            {
                path: 'about',
                component: AboutPage,
                data: { flexCardItem: MAKER_BANNER('ABOUT US'), breadcrumb: 'about' }
            },
            {
                path: 'shop',
                component: ShopPage,
                data: { flexCardItem: MAKER_BANNER('SHOP'), breadcrumb: 'shop' }
            },
            {
                path: 'shop/:id',
                component: ShopSinglePage,
                data: { flexCardItem: MAKER_BANNER('SHOP'), breadcrumb: 'shop', paramLabel: 'product' }
            },
            {
                path: 'cart',
                component: CartPage,
                data: { flexCardItem: MAKER_BANNER('CART'), breadcrumb: 'cart' }
            },
            {
                path: 'checkout',
                component: CheckoutPage,
                data: { flexCardItem: MAKER_BANNER('CHECKOUT'), breadcrumb: 'checkout' }
            },
            {
                path: 'whishlist',
                component: WishlistPage,
                data: { flexCardItem: MAKER_BANNER('WISHLIST'), breadcrumb: 'wishlist' }
            },
            {
                path: 'order',
                component: OrderPage,
                data: { flexCardItem: MAKER_BANNER('ORDER'), breadcrumb: 'order' }
            },
            {
                path: 'faq',
                component: FaqPage,
                data: { flexCardItem: MAKER_BANNER('FAQ'), breadcrumb: 'faq' }
            },
            {
                path: 'team',
                component: TeamPage,
                data: { flexCardItem: MAKER_BANNER('TEAM'), breadcrumb: 'team' }
            },
            {
                path: 'team/:id',
                component: TeamSinglePage,
                data: { flexCardItem: MAKER_BANNER('TEAM'), breadcrumb: 'team', paramLabel: 'team member' }
            },
            {
                path: 'blog',
                component: BlogPage,
                data: { flexCardItem: MAKER_BANNER('BLOG'), breadcrumb: 'blog' }
            },
            {
                path: 'blog/:id',
                component: BlogSinglePage,
                data: { flexCardItem: MAKER_BANNER('BLOG'), breadcrumb: 'blog', paramLabel: 'post' }
            },
            {
                path: 'contact',
                component: ContactPage,
                data: { flexCardItem: MAKER_BANNER('CONTACT'), breadcrumb: 'contact' }
            },
            {
                path: '**',
                component: Error404Page,
                data: { flexCardItem: MAKER_BANNER('404'), breadcrumb: '404' }
            },
        ],
    },
];