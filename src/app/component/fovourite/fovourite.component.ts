import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estate.service';

@Component({
  selector: 'app-fovourite',
  templateUrl: './fovourite.component.html',
  styleUrls: ['./fovourite.component.css']
})
export class FovouriteComponent implements OnInit {
  listFavorite:any = []
  constructor(public realEstateService: RealEstateService) { }

  ngOnInit(): void {
    this.listFavorite=this.realEstateService.get();
  }

  Remove(id:any){
  this.listFavorite = this.listFavorite.filter((item:any) => item.id !== id)
  this.realEstateService.set(this.listFavorite);
  this.realEstateService.showSuccess('Xóa khỏi danh sách yêu thích thành công', 'Thông báo');
  }

}
