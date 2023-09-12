import { productAttributeResponse } from "./productAttributeResponse";

export interface ProductResponse {
  data: {
    type: string,
    id: number,
    attributes: {
      name: string,
      product_classification: string,
      description_bullet_points: string[],
      product_attributes: productAttributeResponse[],
      main_image: {
        image_sizes: {
          original: string,
          small: string,
          thumbnail: string
        }
      },
      price: {
        attributes: {
          min_regular_price: {
            formatted: string
          }
        }
      }
    }
  }
}
