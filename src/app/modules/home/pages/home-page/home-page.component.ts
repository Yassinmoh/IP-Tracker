import { Component } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { IntroFormComponent } from '../../components/intro-form/intro-form.component';
import { MapBoxComponent } from '../../components/map-box/map-box.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MapBoxComponent,IntroFormComponent,InfoBoxComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
