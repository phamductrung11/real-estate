import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUrl:any
  constructor(public router:Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(
      (event: any) => {
        if (event instanceof NavigationEnd) {
          this.currentUrl = this.router.url.slice(1);
          if (this.currentUrl.includes('detail')) {
            this.currentUrl = 'Chi tiết'
          }else if (this.currentUrl.includes('home')) {
            this.currentUrl = 'Trang chủ'
          }else if (this.currentUrl.includes('favourite')) {
            this.currentUrl = 'Danh sách yêu thích'
          }
        }
      }
    );
  }

}
