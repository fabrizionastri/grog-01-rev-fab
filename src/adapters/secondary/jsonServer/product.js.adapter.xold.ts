import axios from 'axios'
import { Product } from '../../../core/entities/product'
import { ProductGateway } from '../../../core/gateways/product.gateway'

const jsonServerPort = 3000
const jsonServerUrl = `http://localhost:${jsonServerPort}`
const axiosInstance = axios.create({ baseURL: jsonServerUrl })

export class JsonServerProductAdapter implements ProductGateway {
  async listAll(): Promise<Product[]> {
    const res = await axiosInstance.get('/products')
    const products = await res.data
    return products
  }

  async getbyId(id: string): Promise<Product | undefined> {
    const res = await axiosInstance.get(`/products/${id}`)
    const product = await res.data
    return product
  }
}

export const productAdapter: ProductGateway = new JsonServerProductAdapter()
