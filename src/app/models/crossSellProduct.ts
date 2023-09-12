export interface CrossSellProduct {
  type: string,
  id: number,
  attributes: {
    name: string,
    classification: string,
    images: {
      original: string,
      small: string,
      thumbnail: string
    },
    price: string
  }
}
