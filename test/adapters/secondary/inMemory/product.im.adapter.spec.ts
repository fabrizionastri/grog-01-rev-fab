import { productsMock } from '../../../../mock/arrays/products'
import { IMAdapter } from '../../../../src/adapters/secondary/inMemory/im.adapter'
import { Product } from '../../../../src/core/entities/product'

describe('InMemoryProductAdapter', () => {
  let productAdapter: IMAdapter<Product>

  beforeEach(() => {
    productAdapter = new IMAdapter<Product>()
  })

  describe('findAll', () => {
    it('returns an empty array when no products have been added', async () => {
      const products = await productAdapter.findAll()
      expect(products).toEqual([])
    })

    it('returns an array of products when products have been added', async () => {
      productAdapter.createMany(productsMock)
      const products = await productAdapter.findAll()
      expect(products).toEqual(productsMock)
    })
  })

  describe('getById', () => {
    it('returns undefined when no product with the specified ID exists', async () => {
      const product = await productAdapter.findById('999')
      expect(product).toBeUndefined()
    })

    it('returns the product with the specified ID when it exists', async () => {
      productAdapter.createMany(productsMock)
      const product = await productAdapter.findById('abc123')
      expect(product).toEqual(productsMock[0])
    })
  })
})
