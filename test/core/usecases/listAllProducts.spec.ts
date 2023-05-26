import { productsMock } from '../../../mock/arrays/products'
import { InMemoryProductAdapter } from '../../../src/adapters/secondary/inMemory/product.im.adapter'
import { JsonServerProductAdapter } from '../../adapters/secondary/jsonServer/product.js.adapter.xold'
import { Product } from '../../../src/core/entities/product'
import { listAllProducts } from '../../../src/core/usecases/listAllProducts'

describe('getProductById', () => {
  describe('InMemoryProductAdapter', () => {
    let productGateway: InMemoryProductAdapter // on définit le type d'adapter qu'on va utiliser
    beforeEach(() => {
      productGateway = new InMemoryProductAdapter() // on purge avant chaque test
    })
    it('should return [] when there are no products', async () => {
      const allProducts = await listAllProducts(productGateway)
      expect(allProducts).toEqual([])
    })
    it('should return all products entered manually', async () => {
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
      productGateway.feedWith(tshirt, pull)
      const allProducts = await listAllProducts(productGateway)
      const expected: Product[] = [tshirt, pull]
      expect(allProducts).toEqual(expected)
    })
    it('should return all products entered from mock arrays data', async () => {
      productGateway.feedWith(...productsMock)
      const allProducts = await listAllProducts(productGateway)
      const expected = productsMock
      expect(allProducts).toEqual(expected)
    })
  })
  describe('JsonServerProductAdapter', () => {
    let productAdapter: JsonServerProductAdapter
    beforeEach(() => {
      productAdapter = new JsonServerProductAdapter()
    })
    it('should return an array of products', async () => {
      const products = await listAllProducts(productAdapter)
      expect(Array.isArray(products)).toBe(true)
      expect(products.length).toBeGreaterThan(0)
    })
  })
})
