import { AfterViewInit, Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Map, Marker } from "maplibre-gl";



@Component({
  selector: 'app-map-box',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './map-box.component.html',
  styleUrl: './map-box.component.scss'
})
export class MapBoxComponent implements AfterViewInit{
  @ViewChild('map') mapRef: ElementRef<HTMLDivElement> | null = null;
  map: Map | null = null;
  marker?: Marker;
  @Input() data:any
  constructor() { }

  ngAfterViewInit(): void {
    const keyValue = 'O7UQwwJHOhwb3GzvdvU1';
    const baseMap = 'https://api.maptiler.com/maps/basic-v2/style.json?key=' + keyValue;

    this.map = new Map({
      container: this.mapRef!.nativeElement,
      style: baseMap,
      center: [0, 0],
      zoom: 1
    })

    if (this.map) {
      console.log("Dtat",this.data);

      this.marker?.remove();
      this.marker = new Marker().setLngLat([this.data.longitude, this.data.latitude]).addTo(this.map);
      this.map.flyTo({
        center: [this.data.longitude, this.data.latitude],
        zoom: 13
      })
    }
  }
}
