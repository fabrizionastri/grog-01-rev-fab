import { productsMock } from '../../../../mock/arrays/products'
import { InMemoryProductAdapter } from './inMemoryProduct.adapter'

describe('InMemoryProductAdapter', () => {
  let adapter: InMemoryProductAdapter

  beforeEach(() => {
    adapter = new InMemoryProductAdapter()
  })

  describe('listAll', () => {
    it('returns an empty array when no products have been added', async () => {
      const products = await adapter.listAll()
      expect(products).toEqual([])
    })

    it('returns an array of products when products have been added', async () => {
      adapter.feedWith(...productsMock)
      const products = await adapter.listAll()
      expect(products).toEqual(productsMock)
    })
  })

  describe('getById', () => {
    it('returns undefined when no product with the specified ID exists', async () => {
      const product = await adapter.getbyId('999')
      expect(product).toBeUndefined()
    })

    it('returns the product with the specified ID when it exists', async () => {
      adapter.feedWith(...productsMock)
      const product = await adapter.getbyId('abc123')
      expect(product).toEqual(productsMock[0])
    })
  })
})
