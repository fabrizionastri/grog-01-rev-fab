import { productsMock } from '../../../mock/arrays/products'
import { IMAdapter } from '../../adapters/primary/inMemory.adapter'
import { JSAdapter } from '../../adapters/secondary/jsonServer/js.adapter'

import { Product } from '../entities/product'
import { getAllProducts } from './getAllProducts'

describe('getByIdProduct', () => {
  describe('IMAdapter<Product>', () => {
    let productAdapter: IMAdapter<Product> // on définit le type d'adapter qu'on va utiliser
    beforeEach(() => {
      productAdapter = new IMAdapter<Product>() // on purge avant chaque test
    })
    it('should return [] when there are no products', async () => {
      const allProducts = await getAllProducts(productAdapter)
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
      productAdapter.createMany([tshirt, pull])
      const allProducts = await productAdapter.getAll()
      const expected: Product[] = [tshirt, pull]
      expect(allProducts).toEqual(expected)
    })
    it('should return all products entered from mock arrays data', async () => {
      productAdapter.createMany(productsMock)
      const allProducts = await getAllProducts(productAdapter)
      const expected = productsMock
      expect(allProducts).toEqual(expected)
    })
  })
  describe('JSAdapter<Product>', () => {
    let productAdapter: JSAdapter<Product>
    beforeEach(() => {
      productAdapter = new JSAdapter<Product>('products')
    })
    it('should return an array of products', async () => {
      const products = await productAdapter.getAll()
      expect(Array.isArray(products)).toBe(true)
      expect(products.length).toBeGreaterThan(0)
    })
  })
})
