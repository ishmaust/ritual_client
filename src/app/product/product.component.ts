import {Component, Input, OnInit} from '@angular/core';
import {Product, ProductCategory} from "../products/products.component";


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product

  isVisible: boolean = true
  filter: typeof ProductCategory = ProductCategory
  imgSrc: string = ""
  activeColorIndex: number = 0

  constructor() { }

  ngOnInit(): void {
    this.imgSrc = this.product.colors.length > 0 ? this.product.colors[0].productColorImg : this.product.imgSrc
    this.imgSrc = this.product.colors[0].productColorImg
  }

  choseColor(event: MouseEvent, productColorImg: string, i: number) {
    this.imgSrc = productColorImg
    this.activeColorIndex = i
  }
}
