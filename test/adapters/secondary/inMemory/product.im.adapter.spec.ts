import { productsMock } from '../../../../mock/arrays/products'
import { IMAdapter } from '../../../../src/adapters/primary/inMemory/im.adapter'
import { Product } from '../../../../src/core/entities/product'

describe('InMemoryProductAdapter', () => {
  let productAdapter: IMAdapter<Product>

  beforeEach(() => {
    productAdapter = new IMAdapter<Product>()
  })

  describe('getAll', () => {
    it('returns an empty array when no products have been added', async () => {
      const products = await productAdapter.getAll()
      expect(products).toEqual([])
    })

    it('returns an array of products when products have been added', async () => {
      productAdapter.createMany(productsMock)
      const products = await productAdapter.getAll()
      expect(products).toEqual(productsMock)
    })
  })

  describe('getById', () => {
    it('returns undefined when no product with the specified ID exists', async () => {
      const product = await productAdapter.getById('999')
      expect(product).toBeUndefined()
    })

    it('returns the product with the specified ID when it exists', async () => {
      productAdapter.createMany(productsMock)
      const product = await productAdapter.getById('abc123')
      expect(product).toEqual(productsMock[0])
    })
  })
})
