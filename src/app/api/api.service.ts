import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductResponse } from '../models/productResponse';
import { productAttributeResponse } from '../models/productAttributeResponse';
import { CrossSellProductsResponse } from '../models/crossSellProductsResponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private productDetailsUrl = '/api/20201005_frontend_assignment/prod_details_';

  private crossSellProductsUrl = '/api/20201005_frontend_assignment/cross_sell_products_for_';

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
    const product = response.data;

    return {
      type: product.type,
      id: product.id,
      attributes: {
        name: product.attributes.name,
        classification: product.attributes.product_classification,
        description: product.attributes.description_bullet_points,
        color: this.getColorAttribute(product.attributes.product_attributes),
        images: {
          original: product.attributes.main_image.image_sizes.original,
          small: product.attributes.main_image.image_sizes.small,
          thumbnail: product.attributes.main_image.image_sizes.thumbnail
        },
        price: product.attributes.price.attributes.min_regular_price.formatted,
        optionProperties: product.attributes.rollup_attributes
      }
    }
  }

  private getColorAttribute(attributes: productAttributeResponse[]): string {
    const attribute = attributes.find((attribute) => attribute.name === 'color');
    return attribute?.value && typeof attribute.value === 'string' ? attribute.value : '';
  }

  getCrossSellProductsById(id: number): Observable<Product[]> {
    const url = this.crossSellProductsUrl + id + '.json';

    return this.http.get<CrossSellProductsResponse>(url).pipe(
      map((response) => response.data.hits.map((hit) => this.mapCrossSellProduct(hit)))
    );
  }

  private mapCrossSellProduct(response: any): Product {
    const product = response.attributes.product;

    return {
      type: product.type,
      id: product.id,
      attributes: {
        name: product.attributes.name,
        classification: product.attributes.product_classification,
        images: {
          original: product.attributes.main_image.image_sizes.original,
          small: product.attributes.main_image.image_sizes.small,
          thumbnail: product.attributes.main_image.image_sizes.thumbnail
        },
        price: product.attributes.price.min_regular_price.formatted,
        orderOptions: product.attributes.product_attributes,
        optionProperties: product.attributes.rollup_attributes
      }
    }
  }
}
