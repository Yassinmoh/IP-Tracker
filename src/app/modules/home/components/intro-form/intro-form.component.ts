import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IpService } from '../../../core/service/ip.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../reducers/app.reducer';
import * as appActions from '../../../../reducers/app.actions'


@Component({
  selector: 'app-intro-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './intro-form.component.html',
  styleUrl: './intro-form.component.scss'
})
export class IntroFormComponent implements OnInit {

  fb: FormBuilder = inject(FormBuilder);
  ipService: IpService = inject(IpService);
  store = inject(Store<AppState>);
  ipForm!: FormGroup;

  @Output() onSearch = new EventEmitter<object>

  ngOnInit(): void {
    this.ipForm = this.fb.group({
      ip: ['', Validators.required]
    })
    this.ipService.getLocalIp().subscribe(res =>{
      let localIP = res.ip
      this.ipForm.controls['ip'].patchValue(localIP)
      this.search(event)
    });
  }

  search(event: any) {
    event.preventDefault();
    let ip = this.ipForm.controls['ip'].value
    this.ipService.getIpInfo(ip).subscribe(data => {
      this.store.dispatch(appActions.searchIP({ ipinfo: data }))
      this.onSearch.emit()
    })
  }
}
