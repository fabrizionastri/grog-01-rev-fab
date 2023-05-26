import { Product } from '../entities/product'
import { ProductGateway } from '../gateways/product.gateway'

export async function getAllProducts(
  productGateway: ProductGateway
): Promise<Product[]> {
  return await productGateway.getAll()
}
