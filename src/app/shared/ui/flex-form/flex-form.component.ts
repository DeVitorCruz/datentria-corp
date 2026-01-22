import { Component, computed, input } from '@angular/core';
import { ButtonFlex } from '../button/button.component';
import { FlexInputComponent } from '../flex-input/flex-input.component';
import { FlexFormItem } from './flex-form-item.interface';


@Component({
  selector: 'app-flex-form',
  imports: [
    ButtonFlex,
    FlexInputComponent
  ],
  templateUrl: './flex-form.component.html'
})
export class FlexFormComponent {
  public readonly FLEX_FORM_ITEM = input.required<FlexFormItem>();
  public readonly FORM = computed(() => { return this.FLEX_FORM_ITEM(); });
}
