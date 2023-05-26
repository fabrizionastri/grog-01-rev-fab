import { JsonServerAdapter } from './js.adapter'
import { Product } from '../../../core/entities/product'

export const jsonServerProductAdapter = new JsonServerAdapter<Product>(
  'products'
)
