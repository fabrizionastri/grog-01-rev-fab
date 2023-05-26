import { productsMock } from '../../../../mock/arrays/products'
import { Product } from '../../../core/entities/product'
import { JSAdapter } from './js.adapter'

describe('ProductJSAdapter', () => {
  let productJSAdapter: JSAdapter<Product>

  beforeEach(() => {
    productJSAdapter = new JSAdapter<Product>('products')
  })

  it('should be defined', () => {
    expect(productJSAdapter).toBeDefined()
  })

  it('should list all products', async () => {
    const products = await productJSAdapter.listAll()
    expect(products).toEqual(productsMock)
  })
})
