import { productsMock } from '../../../mock/arrays/products'
import { InMemoryProductAdapter } from '../../adapters/secondary/inMemory/inMemoryProduct.adapter'
import { Product } from '../entities/product'
import { getProductById } from './getProductById'

describe('listAllProducts', () => {
  describe('InMemoryProductAdapter', () => {
    let productAdapter: InMemoryProductAdapter // on définit le type d'adapter qu'on va utiliser
    beforeEach(() => {
      productAdapter = new InMemoryProductAdapter() // on purge avant chaque test
    })
    it('should return undefined when there are no products', async () => {
      const product = await getProductById('abc123', productAdapter)
      expect(product).toEqual(undefined)
    })
    it('should return one product from products entered manually', async () => {
      const tshirt: Product = {
        id: 'abc123',
        name: 'T-shirt',
        imgUrl: 'assets/t-shirt.png',
      }
      const pull: Product = {
        id: 'def456',
        name: 'Pull',
        imgUrl: 'assets/pull.png',
      }
      productAdapter.feedWith(tshirt, pull)
      const product = await getProductById('abc123', productAdapter)
      const expected: Product = tshirt
      expect(product).toEqual(expected)
    })
    it('should return one product from mock arrays data', async () => {
      productAdapter.feedWith(...productsMock)
      const product = await getProductById('abc123', productAdapter)
      const expected: Product = {
        id: 'abc123',
        name: 'T-shirt',
        imgUrl: 'assets/t-shirt.png',
      }
      expect(product).toEqual(expected)
    })
  })
})
