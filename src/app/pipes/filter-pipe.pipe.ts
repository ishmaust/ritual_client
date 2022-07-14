import {Pipe, PipeTransform} from '@angular/core';
import {Product, ProductCategory} from "../products/products.component";
import {Filter} from "../filter/filter.component";

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  transform(products: Product[], filter: Filter): Product[] {
    console.log(filter)
    if(filter.categoryFilter.length === 0) {
      return products.filter(product => this.checkPriceAndSize(product.price, product.size, filter))
    }
    return products.filter(product => filter.categoryFilter.includes(product.category) && this.checkPriceAndSize(product.price, product.size, filter))
  }

  checkPriceAndSize(price: number, size: number, filter: Filter) : boolean {
    return price >= filter.priceFilter.min &&
      price <= filter.priceFilter.max &&
      size >= filter.sizeFilter.min &&
      size <= filter.sizeFilter.max
  }

}
