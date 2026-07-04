import { Component } from '@angular/core';
import { ButtonFlex } from '@shared/ui/button/button.component';
import { ImgFlex } from '@shared/ui/img-flex/img-flex.component';
import { SlideComponent } from '@shared/ui/side-slide/slide.component';
import { TextBoxComponent } from '@shared/ui/text-box/text-box.component';
import { TabPanelComponent } from '@ui-building/tab-panel/tab-panel.component';
import { Product } from '@core/models/product/product.model';
import { TabItem, TabPanelContent } from '@ui-building/tab-panel/tab-panel.interface';
import { TextBox } from '@shared/ui/text-box/text-box-item.interface';
import { ReviewCardComponent } from '@ui-building/review-card/review-card.component';
import { ReviewCardItem, ReviewPanelContent } from '@ui-building/review-card/review-card.interface';

@Component({
  selector: 'app-shop-single',
  imports: [ ImgFlex, TextBoxComponent, ButtonFlex, SlideComponent, TabPanelComponent ],
  templateUrl: './shop-single.page.html',
  styleUrl: './shop-single.page.scss'
})
export class ShopSinglePage {
  private _buildTabPanel(product: Product): TabPanelContent {
    return {
      tabs: [
        {
          id: 0 as number,
          label: 'Product Details' as string,
          component: TextBoxComponent,
          componentInput: {
            TEXT_BOX_LIST: [
              { id: 0 as number, text: [product.description ?? 'No description available.'] as string[], } as TextBox,
            ] as TextBox[],
          } as Record<string, any>,
        } as TabItem,
        {
          id: 1 as number,
          label: 'Details & Specs' as string,
          component: TextBoxComponent,
          componentInput: {
            TEXT_BOX_LIST: [
              { id: 0 as number, text: [product.specs ?? 'No specifications available.'] as string[], } as TextBox,
            ] as TextBox[],
          } as Record<string, any>,
        } as TabItem,
        {
          id: 2 as number,
          label: 'Shipping & Return' as string,
          component: TextBoxComponent,
          componentInput: {
            TEXT_BOX_LIST: [
              { id: 0 as number, text: ['Standard shipping 5-7 business days. Free returns within 30 days.'] as string[], } as TextBox,
            ] as TextBox[],
          } as Record<string, any>,
        } as TabItem,
        {
          id: 3 as number,
          label: 'Reviews' as string,
          component: ReviewCardComponent,
          componentInput: {
            CONTENT: { 
              reviews: product.reviews ?? [] as ReviewCardItem[],
              productId: product.id as number, 
            } as ReviewPanelContent,
          } as Record<string, any>,
        } as TabItem,
      ] as TabItem[],
      customClassName: [] as string[],
    } as TabPanelContent;
  }
}
