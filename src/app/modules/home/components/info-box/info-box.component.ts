import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { AppState } from '../../../../reducers/app.reducer';
import { Store } from '@ngrx/store';
import { getIpData } from '../../../../reducers/app.selectors';
import { Observable } from 'rxjs';
// import * as appActions from '../../../../store/app.actions'


@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.scss'
})
export class InfoBoxComponent implements OnInit {

  @Input() ipInfo!:Observable<any>
  store = inject(Store<AppState>)
  ngOnInit(): void {
    // console.log(this.ipInfo);

  }
}
