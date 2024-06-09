import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpService {
  http= inject(HttpClient)
  constructor() { }

  getIpInfo(ip:string):Observable<any>{
    let option = {
      headers: {
        'x-rapidapi-key': 'ce0370d6f5mshd64802fb9408c6ep1912f4jsn68ae615df64a',
        'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
      }
    }
    return this.http.get(`https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/?ip=${ip}`,option)
  }

  getLocalIp() {
    const apiURL = 'https://api.ipify.org/?format=json'
    const request = this.http.get<any>(apiURL);
    return request;
  }
}
