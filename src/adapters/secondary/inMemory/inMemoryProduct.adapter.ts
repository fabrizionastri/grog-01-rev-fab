import { Product } from '../../../core/entities/product'
import { ProductGateway } from '../../../core/gateways/product.gateway'

export class InMemoryProductAdapter implements ProductGateway {
  private products: Product[] = []

  listAll(): Promise<Product[]> {
    return Promise.resolve(this.products)
  }

  feedWith(...products: Product[]) {
    this.products = products
  }

  getbyId(id: string): Promise<Product | undefined> {
    const product = this.products.find((product) => product.id === id)
    return Promise.resolve(product)
  }
}
