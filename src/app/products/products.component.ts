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

  productList: Product[] = [{productName: "корзинка1", category: ProductCategory.TYPE1, size: 120, price: 100, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000ddd", productColorImg: "https://via.placeholder.com/370x300/000ddd"}, {color: "#ffff00", productColorImg: "https://via.placeholder.com/370x300/ffff00"}]},
    {productName: "Венок1", category: ProductCategory.TYPE2, size: 120, price: 110, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/222"}]},
    {productName: "корзинка2", category: ProductCategory.TYPE1, size: 140, price: 120, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/333"}]},
    {productName: "Венок2", category: ProductCategory.TYPE2, size: 140, price: 130, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/333"}]},
    {productName: "Венок3", category: ProductCategory.TYPE2, size: 160, price: 130,  imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/333"}]},
    {productName: "Венок4", category: ProductCategory.TYPE2, size: 160, price: 140, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/333"}]},
    {productName: "композиция1", category: ProductCategory.TYPE3, size: 160, price: 150, imgSrc: "https://via.placeholder.com/370x300/333", colors: [{color: "#000000", productColorImg: "https://via.placeholder.com/370x300/333"}]}]

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    //this.httpService.getData().subscribe(value => this.productList = value)
  }

  activeFilter(newFilterState: Filter) {
    this.filterState = newFilterState
  }
}
