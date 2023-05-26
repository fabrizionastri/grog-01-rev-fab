import { Product } from '../entities/product'

export interface ProductGateway {
  listAll(): Promise<Product[]>
  getbyId(id: string): Promise<Product | undefined>
}
