import { Routes } from "@angular/router";


export const JEWELRY_LUXURY_THEME_ROUTE: Routes = [
    {
        path: '',
        loadComponent: () => import('../../pages/main-build/semantic-home/semantic-home.page')
			.then(m => m.SemanticHome), 
        children: [
            {
                path: '',
                loadChildren: () => import('../../pages/home/HOME_ROUTES')
					.then((m) => m.HOME_ROUTES),
            },
            {
				path: 'about',
				loadComponent: () => import('../../pages/about/about.page')
				    .then(m => m.AboutPage)
			},
			{
				path: 'shop',
				loadComponent: () => import('../../pages/shop/shop.page')
					.then(m => m.ShopPage)	
			},
			{
				path: 'shop/:id',
				loadComponent: () => import('../../pages/shop-single/shop-single.page')
				    .then(m => m.ShopSinglePage)
			},
			{
				path: 'cart',
				loadComponent: () => import('../../pages/cart/cart.page')
				    .then(m => m.CartPage)
			},
			{
				path: 'checkout',
				loadComponent: () => import('../../pages/checkout/checkout.page') 
					.then(m => m.CheckoutPage)
			},
			{
				path: 'wishlist',
				loadComponent: () => import('../../pages/wishlist/wishlist.page')
				    .then(m => m.WishlistPage)
			},
			{
				path: 'order',
				loadComponent: () => import('../../pages/order/order.page')
				    .then(m => m.OrderPage)
			},
			{
				path: 'faq',
				loadComponent: () => import('../../pages/faq/faq.page')
				    .then(m => m.FaqPage) 
			},
			{
				path: 'team',
				loadComponent: () => import('../../pages/team/team.page')
					.then(m => m.TeamPage)
			},
			{
				path: 'team/:id',
				loadComponent: () => import('../../pages/team-single/team-single.page')
				    .then(m => m.TeamSinglePage) 
			},
			{
				path: 'blog',
				loadComponent: () => import('../../pages/blog/blog.page')
				    .then(m => m.BlogPage)
			},
			{
				path: 'blog/:id',
				loadComponent: () => import('../../pages/blog-single/blog-single.page')
				     .then(m => m.BlogSinglePage)
			},
			{
				path: 'contact',
				loadComponent: () => import('../../pages/contact/contact.page')
					.then(m => m.ContactPage)
			},
			{
				path: '**',
				loadComponent: () => import('../../pages/error-404/error-404.page')
					.then(m => m.Error404Page)
			}
        ],   
    },
];
