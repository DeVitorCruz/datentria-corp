export interface ProductVariant {
    id: number;
    label: string;
    price: number;
    discount_price?: number;
    stock: number;
};

export interface Product {
    id: number;
    name: string;
    slug: string;
    description?: string;
    image?: string;
    is_active: boolean;
    category_id: number;
    variants?: ProductVariant[];
};