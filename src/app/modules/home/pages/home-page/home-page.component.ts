import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { InfoBoxComponent } from '../../components/info-box/info-box.component';
import { IntroFormComponent } from '../../components/intro-form/intro-form.component';
import { MapBoxComponent } from '../../components/map-box/map-box.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../reducers/app.reducer';
import { getIpData } from '../../../../reducers/app.selectors';
import { Observable, tap } from 'rxjs';
import { IpService } from '../../../core/service/ip.service';
import { Map, Marker } from "maplibre-gl";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [MapBoxComponent, IntroFormComponent, InfoBoxComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit , AfterViewInit{
  ipInfo$!: Observable<any>
  @ViewChild('map') mapRef: ElementRef<HTMLDivElement> | null = null;
  map: Map | null = null;
  marker?: Marker;
  store = inject(Store<AppState>);
  ipservice = inject(IpService)
  data:any
  getIpInfo() {
    this.ipInfo$ = this.store.select(getIpData).pipe(
      tap((data)=>{

        if (this.map) {
          if(this.marker){
            this.marker.remove()
          }
          this.marker= new Marker().setLngLat([data.longitude, data.latitude]).addTo(this.map);
          this.map.flyTo({
            center: [data.longitude, data.latitude],
            zoom: 13
            })
        }
      })
    )
  }

  ngAfterViewInit(): void {
    const keyValue = 'O7UQwwJHOhwb3GzvdvU1';
    const baseMap = 'https://api.maptiler.com/maps/basic-v2/style.json?key=' + keyValue;

    this.map = new Map({
      container: this.mapRef!.nativeElement,
      style: baseMap,
      center: [0, 0],
      zoom: 1,
    })
  }


ngOnInit(): void {
}

}
