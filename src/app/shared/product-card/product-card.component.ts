import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  @Input() isCrossSellProduct = false;

  @Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>;

  options: string[] = [];

  ngOnInit(): void {
    if (this.product.attributes.orderOptions) {
      this.options = this.product.attributes.orderOptions[this.product.attributes.optionProperties[0]];
    }
  }

  addProductToCart(product: Product): void {
    this.addToCart.emit(product);
  }
}
