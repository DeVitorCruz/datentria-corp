import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/ui/container/container.component';
import { FlexCollectionComponent } from '../../shared/ui/flex-collection/flex-collection.component';
import { HomeConfig } from './home-config.interface';
import { HOME_CONFIG } from './HOME_CONFIG';

@Component({
  selector: 'app-new-home',
  imports: [
    ContainerComponent,
    FlexCollectionComponent
  ],
  templateUrl: './home.page.html'
})
export class Home {
  public readonly CONFIG: HomeConfig = HOME_CONFIG;
}
