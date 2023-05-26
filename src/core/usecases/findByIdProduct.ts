import { Product } from '../entities/product'
import { ProductGateway } from '../gateways/product.gateway'

export async function findByIdProduct(
  id: string,
  productGateway: ProductGateway
): Promise<Product | undefined> {
  return await productGateway.findById(id)
}