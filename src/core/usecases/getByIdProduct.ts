import { Product } from '../entities/product'
import { ProductGateway } from '../gateways/product.gateway'

export async function getByIdProduct(
  id: string,
  productGateway: ProductGateway
): Promise<Product | undefined> {
  return await productGateway.getById(id)
}
