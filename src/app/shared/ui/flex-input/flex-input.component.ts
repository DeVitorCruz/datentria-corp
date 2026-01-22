import { Component, computed, input } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { DynamicAttributesDirective } from '../../../core/directives/attributes/dynamic-attributes.directive';
import { FlexInputItem } from '../../../core/models/share-info/flex-input-item.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-flex-input',
  imports: [
    MatInputModule,
    DynamicAttributesDirective,
    NgClass
  ],
  templateUrl: './flex-input.component.html'
})
export class FlexInputComponent {
  public readonly INPUT_ITEM = input.required<FlexInputItem>();
  public readonly INPUT = computed(() => { return this.INPUT_ITEM(); });
}
