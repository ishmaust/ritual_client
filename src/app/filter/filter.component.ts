import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ChangeContext, LabelType, Options, PointerType} from '@angular-slider/ngx-slider';
import {ProductCategory} from "../products/products.component";

export interface Filter {
  categoryFilter: ProductCategory[],
  priceFilter: {
    min: number,
    max: number
  }
  sizeFilter: {
    min: number,
    max: number
  }
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() filterState = new EventEmitter<Filter>()


  filterEnum: typeof ProductCategory = ProductCategory
  categoryFilter: ProductCategory[] = []
  filter: Filter = {categoryFilter: [], priceFilter: {min: 0, max: 0}, sizeFilter: {min: 0, max: 0}}

  //Configuration for price slide
  minPriceValue: number = 0;
  maxPriceValue: number = 500;
  priceOptions: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Минимальная цена:</b> ' + value + ' BYN';
        case LabelType.High:
          return '<b>Максимальная цена:</b> ' + value + ' BYN';
        default:
          return value +' BYN';
      }
    }
  };

  //Configuration for size slide
  minSizeValue: number = 80;
  maxSizeValue: number = 220;
  sizeOptions: Options = {
    floor: 80,
    ceil: 220,
    showTicksValues: true,
    step: 10,
    tickStep: 10,
    tickValueStep: 10
  };

  constructor() { }

  ngOnInit(): void {
    this.filter.categoryFilter = this.categoryFilter
    this.filter.priceFilter.max = this.maxPriceValue
    this.filter.priceFilter.min = this.minPriceValue
    this.filter.sizeFilter.max = this.maxSizeValue
    this.filter.sizeFilter.min = this.minSizeValue

    this.filterState.emit(this.filter)
  }

  setType(type : ProductCategory){
    let index = this.categoryFilter.indexOf(type)
    if(index !== -1) {
      this.categoryFilter.splice(index, 1)
    } else {
      this.categoryFilter.push(type)
    }

    this.filter.categoryFilter = this.categoryFilter
    this.filterState.emit(this.filter)
  }


  priceSliderChange(event: ChangeContext) {
    if (event.highValue != null) {
      this.filter.priceFilter.max = event.highValue
    }
    this.filter.priceFilter.min = event.value
    console.log(event)
    this.filterState.emit(this.filter)
  }

  sizeSliderChange(event: ChangeContext) {


    if (event.highValue != null) {
      this.filter.sizeFilter.max = event.highValue
    }
      this.filter.sizeFilter.min = event.value

    this.filterState.emit(this.filter)
  }
}
