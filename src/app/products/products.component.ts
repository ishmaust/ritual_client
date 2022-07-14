import { Component, OnInit } from '@angular/core';
import {Filter} from "../filter/filter.component";
import {HttpService} from "../core/servicies/http.service";

export interface Product {
  productName : string,
  category : ProductCategory,
  size : number,
  price: number,
  imgSrc : string
  colors : {
    color: string,
    productColorImg: string
  }[]
}

export enum ProductCategory {
  TYPE1 = "корзинка" ,
  TYPE2 = "венок",
  TYPE3 = "композиция"
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  filterState: Filter = {categoryFilter: [], priceFilter: {min: 0, max: 0}, sizeFilter: {min: 0, max: 0}}

  productList: Product[] = []

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData().subscribe(value => this.productList = value)
  }

  activeFilter(newFilterState: Filter) {
    this.filterState = newFilterState
  }
}
