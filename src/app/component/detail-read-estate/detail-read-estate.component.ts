import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estate.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-read-estate',
  templateUrl: './detail-read-estate.component.html',
  styleUrls: ['./detail-read-estate.component.css']
})
export class DetailReadEstateComponent implements OnInit {
  item:any;
  constructor( public activeRoute : ActivatedRoute, public realEstateService: RealEstateService, config: NgbCarouselConfig) {
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    this.realEstateService.getData().subscribe((res) => {
       this.item = res.find((item:any)=> item.id == id);
    });
  }

}
