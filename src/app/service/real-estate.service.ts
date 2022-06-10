import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class RealEstateService {
  KEY_REALESTATE : string= 'REALESTATE';

  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  showSuccess(message: any, title: any) {
    this.toastr.success(message, title, {
      enableHtml: true
    })
  }

  showError(message: any, title: any) {
    this.toastr.error(message, title, {
      enableHtml: true
    })
  }

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

