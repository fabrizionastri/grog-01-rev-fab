import { productsMock } from '../../../../mock/arrays/products'
import { Product } from '../../../../src/core/entities/product'
import { JSAdapter } from '../../../../src/adapters/secondary/jsonServer/js.adapter'

describe('JSAdapter<Product>', () => {
  let productJSAdapter: JSAdapter<Product>

  beforeEach(() => {
    productJSAdapter = new JSAdapter<Product>('products')
  })

  it('should be defined', () => {
    expect(productJSAdapter).toBeDefined()
  })

  it('should list all products', async () => {
    const products = await productJSAdapter.findAll()
    expect(products).toEqual(productsMock)
  })
})
