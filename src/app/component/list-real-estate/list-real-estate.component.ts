import { RealEstateService } from './../../service/real-estate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-real-estate',
  templateUrl: './list-real-estate.component.html',
  styleUrls: ['./list-real-estate.component.css']
})
export class ListRealEstateComponent implements OnInit {
  listReadEstate = [];
  page: any = 1
  searchField = {
    city: '',
    area: '',
    category: ''
  }
  listCity: any[] = [
    {
      name: 'Thành Phố',
      value: ''
    },
    {
      name: 'Đà Nẵng',
      value: 'danang'
    },
    {
      name: 'Thành Phố Hồ Chí Minh',
      value: 'hochiminh'
    },
    {
      name: 'Hà Nội',
      value: 'hanoi'
    },
  ];
  listCategory: any[] = [
    {
      name: 'Tất cả sản phẩm',
      value: '',
    },
    {
      name: 'Chung cư',
      value: 'chungcu',
    },
    {
      name: 'Condotel',
      value: 'condotel',
    },
    {
      name: 'Shophouse',
      value: 'shophouse',
    },
  ];
  listArea: any[] = [
    {
      name: 'Diện tích',
      value: '',
    },
    {
      name: '<30m2',
      value: '<30',
    },
    {
      name: '30-45m2',
      value: '30-45',
    },
    {
      name: '45-60m2',
      value: '45-60',
    },
    {
      name: '>60m2',
      value: '>60',
    },
  ];
  constructor(public realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.getData();
  }

  async getData() {
    const res = await this.realEstateService.getData().toPromise();
    this.listReadEstate = res
    this.disbaleItem();
  }
  async handFind() {
    await this.getData();
    if (this.searchField.city || this.searchField.area) {
      if (this.searchField.city) {
        this.listReadEstate = this.listReadEstate.filter((item: any) => item.city === this.searchField.city);
      }
      if (this.searchField.area) {
        this.listReadEstate = this.listReadEstate.filter((item: any) => (this.searchField.area === '<30' ? item.area <= 30 : (this.searchField.area === '30-45' ? item.area >= 30 && item.area <= 40 : (this.searchField.area === '45-60' ? item.area >= 45 && item.area <= 60 : (this.searchField.area === '>60' ? item.area >= 60 : null)))));
      }
      if (this.searchField.category) {
        this.listReadEstate = this.listReadEstate.filter((item: any) => item.type.value === this.searchField.category);
      }
    } else {
      this.getData();
    }
  }
  disbaleItem(){
    const listFavorite = this.realEstateService.get();
    if (listFavorite.length > 0) {
      this.listReadEstate.forEach((item:any) => {
        item.disabled=false;
        const value = listFavorite.some((items:any) => items.id === item.id )
        if (value) {
          item.disabled = true;
        }
      });
    }
  }
  handldeAdd(event:any) {
    let ListItem = this.realEstateService.get();
    ListItem.push(event)
    this.realEstateService.set(ListItem)
    this.realEstateService.showSuccess('Thêm vào danh sách yêu thích thành công', 'Thông báo')
    this.listReadEstate.map((item:any) => {
      if (item.id === event.id) {
        item.disabled = true;
      }
    });
  }
  async handleCategory(){
    if (this.searchField.city || this.searchField.area) {
      this.searchField.city='';
      this.searchField.area='';
    }
    await this.getData();
    if (this.searchField.category) {
      this.listReadEstate = this.listReadEstate.filter((item: any) => item.type.value === this.searchField.category);
    }else {
      this.getData();
    }
  }
}
