import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUrl:any;
  nameUrl:any;
  constructor(public router:Router, public realEstateService: RealEstateService) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = this.router.url.slice(1);
          if (this.router.url.slice(1).includes('detail')) {
            this.nameUrl = 'Chi tiết'
          }else if (this.router.url.slice(1).includes('home')) {
            this.nameUrl = 'Trang chủ'
          }else if (this.router.url.slice(1).includes('favourite')) {
            this.nameUrl = 'Danh sách yêu thích'
          }
        }
      }
    );
  }

  hanldeCart(){
    const listRealEstate =this.realEstateService.get();
    if (listRealEstate.length === 0) {
      this.realEstateService.showError('Không có bảng ghi nào trong danh sách', 'Thông báo');
    }else{
      this.router.navigate(['/favourite'])
    }
  }

}
