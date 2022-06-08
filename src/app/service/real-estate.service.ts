import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  KEY_REALESTATE : string= 'REALESTATE';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>('./assets/data.json');
  }

  set(value:any) {
    return localStorage.setItem(this.KEY_REALESTATE, JSON.stringify(value));
  }
  get() {
    return JSON.parse(localStorage.getItem(this.KEY_REALESTATE) || '[]') || [];
  }


}

