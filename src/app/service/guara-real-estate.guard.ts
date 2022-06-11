import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RealEstateService } from './real-estate.service';

@Injectable({
  providedIn: 'root'
})
export class GuaraRealEstateGuard implements CanActivate {
  constructor(private realEstateService: RealEstateService, private router : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const id = route.paramMap.get('id');
      return this.value(id);
  }

  async value(id:any) {
    const list = await this.realEstateService.getData().toPromise();
    const value = list.some((item:any) => item.id === id);
    if (!value) {
      this.router.navigate(['']);
      this.realEstateService.showError('Đường dẫn không hợp lệ', 'Thông báo');
      return false;
    }
    return value;
  }

}
