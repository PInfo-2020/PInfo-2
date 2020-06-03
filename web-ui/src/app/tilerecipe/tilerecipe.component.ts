import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tilerecipe',
  templateUrl: './tilerecipe.component.html',
  styleUrls: ['./tilerecipe.component.css']
})
export class TilerecipeComponent implements OnInit {
  subtitlerecipe="substitle empty";
  titlerecipe="title empty";
  starstring  :  string="";
  numberlist=[];
  numberlist2=[];
  numberstar:number=0;
  constructor() {
  }


  ngOnInit(): void {
    for(let coun=0;coun<this.numberstar;coun++){
      this.starstring=this.starstring+"★";
    }
    for(let coun=0;coun<5-this.numberstar;coun++){
      this.starstring=this.starstring+"☆";
    }
  }

}
