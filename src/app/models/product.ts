export interface Product {
  type: string,
  id: number,
  attributes: {
    name: string,
    classification: string,
    description?: string[],
    color?: string,
    images: {
      original: string,
      small: string,
      thumbnail: string
    },
    price: string
  }
}
