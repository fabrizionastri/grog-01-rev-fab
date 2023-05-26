import { Product } from '../entities/product'
import { ProductGateway } from '../gateways/product.gateway'

export async function findAllProducts(
  productGateway: ProductGateway
): Promise<Product[]> {
  return await productGateway.findAll()
}
