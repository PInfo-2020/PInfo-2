import { Component, OnInit } from '@angular/core';
import{ GlobalConstant } from '../common/globalconstant';

@Component({
  selector: 'app-myfridge',
  templateUrl: './myfridge.component.html',
  styleUrls: ['./myfridge.component.css']
})
export class MyfridgeComponent implements OnInit {
  ingredientlist=GlobalConstant.INGREDIENT_LIST_;
  constructor() { }

  addButton(){
    console.log("addButoon pressed.")
  }

  deleteButton(){
    console.log("deleteButton pressed.")

  }

  ngOnInit(): void {
  }

}
