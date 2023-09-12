import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId = 362950;

  product: Product | null = null;

  error: any | null = null;

  confirmationModalOpen = false;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getProductDetailsById();
  }

  getProductDetailsById(): void {
    this.apiService.getProductDetailsById(this.productId).subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }

  addToCart(): void {
    this.confirmationModalOpen = true;
  }
}
