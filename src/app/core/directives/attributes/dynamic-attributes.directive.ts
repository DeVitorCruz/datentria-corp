import { computed, Directive, ElementRef, input, Renderer2 } from '@angular/core';
import { FlexInputItem } from '../../models/share-info/flex-input-item.interface';

@Directive({
  selector: '[appDynamicAttributes]'
})
export class DynamicAttributesDirective {

  public readonly FLEX_INPUT_ITEM = input.required<FlexInputItem>();
  public readonly INPUT = computed(() => { return this.FLEX_INPUT_ITEM(); });

  constructor(private el: ElementRef<HTMLInputElement>, private renderer: Renderer2) { }

  public ngOnChanges(): void {

    const INPUT = this.el.nativeElement;
    const { value, placeholder, isDisabled, type } = this.INPUT();

    INPUT.disabled = !isDisabled;

    this.renderer.setAttribute(INPUT, 'value', value);
    this.renderer.setAttribute(INPUT, 'placeholder', placeholder?? '');
    this.renderer.setAttribute(INPUT, 'type', type);
  }
}
