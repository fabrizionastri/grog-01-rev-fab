import { Product } from '../entities/product'
import { Adapter } from '../../adapters/adapter'

export type ProductGateway = Adapter<Product>
