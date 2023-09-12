import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductResponse } from '../models/productResponse';
import { productAttributeResponse } from '../models/productAttributeResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productDetailsUrl = '/api/20201005_frontend_assignment/prod_details_';

  constructor(
    private http: HttpClient
  ) { }

  getProductDetailsById(id: number): Observable<Product> {
    const url = this.productDetailsUrl + id + '.json';

    return this.http.get<ProductResponse>(url).pipe(
      map((response) => this.mapProduct(response))
    );
  }

  private mapProduct(response: ProductResponse): Product {
    const responseData = response.data;

    return {
      type: responseData.type,
      id: responseData.id,
      attributes: {
        name: responseData.attributes.name,
        classification: responseData.attributes.product_classification,
        description: responseData.attributes.description_bullet_points,
        color: this.getColorAttribute(responseData.attributes.product_attributes),
        images: {
          original: responseData.attributes.main_image.image_sizes.original,
          small: responseData.attributes.main_image.image_sizes.small,
          thumbnail: responseData.attributes.main_image.image_sizes.thumbnail
        },
        price: responseData.attributes.price.attributes.min_regular_price.formatted
      }
    }
  }

  private getColorAttribute(attributes: productAttributeResponse[]): string {
    const attribute = attributes.find((attribute) => attribute.name === 'color');
    return attribute?.value && typeof attribute.value === 'string' ? attribute.value : '';
  }
}
