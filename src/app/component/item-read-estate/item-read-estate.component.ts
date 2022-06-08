import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RealEstateService } from 'src/app/service/real-estate.service';

@Component({
  selector: 'app-item-read-estate',
  templateUrl: './item-read-estate.component.html',
  styleUrls: ['./item-read-estate.component.css']
})
export class ItemReadEstateComponent implements OnInit {
  @Input() itemReadEstate :any;
  @Output() add = new EventEmitter();
  constructor(private router: Router, public realEstateService: RealEstateService) { }

  ngOnInit(): void {
  }
  hanldLink(){
    this.router.navigate([`home/detail/${this.itemReadEstate.id}`]);
  }
  handleAdd(){
    this.add.emit(this.itemReadEstate);
  }
}
