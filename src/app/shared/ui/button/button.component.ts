import { CommonModule, NgClass } from '@angular/common';
import { Component, computed, input, } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonItem } from './button-item.interface';
import { IconFlexComponent } from '../icon-flex/icon-flex.component';
import { DynamicEventsDirective } from '../../../core/directives/dynamic-events/dynamic-events.directive';

@Component({
  selector: 'app-button-flex',
  imports: [
    CommonModule,
    MatButtonModule,
    IconFlexComponent,
    NgClass,
    DynamicEventsDirective
  ],
  templateUrl: './button.component.html',
})
export class ButtonFlex {
  public readonly BUTTON_ITEM = input.required<ButtonItem>();
  public readonly BUTTON = computed(() => { return this.BUTTON_ITEM(); });
} 
