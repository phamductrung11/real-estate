import { Component, OnInit } from '@angular/core';
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
  }

}
