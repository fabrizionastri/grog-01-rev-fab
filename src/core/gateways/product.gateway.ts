import { Product } from '../entities/product'
import { Gateway } from './gateway';

export interface ProductGateway extends Gateway<Product> { }
