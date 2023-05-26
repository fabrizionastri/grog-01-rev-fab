import { productsMock } from '../../../mock/arrays/products'
import { IMAdapter } from '../../../src/adapters/secondary/inMemory/im.adapter'
import { Product } from '../../../src/core/entities/product'

describe('listAllProducts', () => {
  describe('IMAdapter<Product>', () => {
    let productAdapter: IMAdapter<Product> // on définit le type d'adapter qu'on va utiliser
    beforeEach(() => {
      productAdapter = new IMAdapter<Product>() // on purge avant chaque test
    })
    it('should return undefined when there are no products', async () => {
      const product = await productAdapter.findById('abc123')
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
      productAdapter.createMany([tshirt, pull])
      const product = await productAdapter.findById('abc123')
      const expected: Product = tshirt
      expect(product).toEqual(expected)
    })
    it('should return one product from mock arrays data', async () => {
      productAdapter.createMany(productsMock)
      const product = await productAdapter.findById('abc123')
      const expected: Product = {
        id: 'abc123',
        name: 'T-shirt',
        imgUrl: 'assets/t-shirt.png',
      }
      expect(product).toEqual(expected)
    })
  })
})
