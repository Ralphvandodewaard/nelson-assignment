import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: any | null = null;

  error: any | null = null;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    this.apiService.getProduct().subscribe({
      next: (response) => {
        this.product = response;
      },
      error: (error) => {
        this.error = error;
      }
    })
  }
}
