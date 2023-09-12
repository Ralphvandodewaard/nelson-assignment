import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})
export class ConfirmationModalComponent implements OnInit {
  @Input() product!: Product;

  crossSellProducts: Product[] = [];

  error: any | null = null;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCrossSellProductsById();
  }

  getCrossSellProductsById(): void {
    this.apiService.getCrossSellProductsById(this.product.id).subscribe({
      next: (response) => {
        this.crossSellProducts = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }
}
