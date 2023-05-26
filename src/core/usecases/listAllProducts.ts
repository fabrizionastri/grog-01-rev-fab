import { Product } from '../entities/product'
import { ProductGateway } from '../gateways/product.gateway'

export async function listAllProducts(
  productGateway: ProductGateway
): Promise<Product[]> {
  return await productGateway.listAll()
}
