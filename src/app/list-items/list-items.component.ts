import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../service/product-data.service';

export class Item {
  constructor(
    public id: number,
    public itemName: string,
    public description: string,
    public targetDate: Date,
    public available: boolean

  ) {
  }
}

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  items: Item[];

  constructor(
    private dataService: ProductDataService
  ) { }

  ngOnInit() {
    this.dataService.retrieveAllTodos().subscribe(
      response => {
        console.log(response);
        this.items = response;
      }
    );
  }

}
