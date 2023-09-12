export interface CrossSellProductsResponse {
  data: {
    hits: {
      attributes: {
        product: {
          type: string,
          id: number,
          attributes: {
            main_image: {
              image_sizes: {
                original: string,
                small: string,
                thumbnail: string
              }
            },
            product_classification: string,
            name: string,
            price: {
              min_regular_price: {
                formatted: string
              }
            }
          }
        }
      }
    }[]
  }
}
