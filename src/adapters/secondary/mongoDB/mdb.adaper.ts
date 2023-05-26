import { Model, Document, Schema, model, Types } from 'mongoose'
import { Entity } from '../../../core/entities/entity'
import { Adapter } from '../../adapter'
import { Product } from '../../../../src/core/entities/product'

export interface ProductModel extends Product, Document {
  _id: Types.ObjectId
}

const productSchema = new Schema<ProductModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  imgUrl: { type: String, required: true },
})

export const ProductModel = model<Product>('Product', productSchema)

export class MDBAdapter<T extends Entity & Document> implements Adapter<T> {
  constructor(private readonly model: Model<T>) {}

  async getAll(): Promise<T[]> {
    const entities = await this.model.find().exec()
    return entities
  }

  async getById(id: string): Promise<T | undefined> {
    const entity = await this.model.getById(id).exec()
    return entity ?? undefined
  }

  async create(entity: T): Promise<void> {
    await this.model.create(entity)
  }

  async createMany(entities: T[]): Promise<void> {
    await this.model.insertMany(entities)
  }

  async update(entity: T): Promise<void> {
    const updates = entity.toObject()
    await this.model.getByIdAndUpdate(entity.id, updates).exec()
  }

  async delete(id: string): Promise<void> {
    await this.model.getByIdAndDelete(id).exec()
  }
}

export class ProductMDBAdapter extends MDBAdapter<
  Product & Document & { _id: any }
> {
  constructor(model: Model<Product & Document & { _id: any }>) {
    super(model)
  }
}

// describe('MDBAdapter', () => {
//   let adapter: ProductMDBAdapter
//   const products = productsMock

//   beforeAll(async () => {
//     await ProductModel.deleteMany({})
//     await ProductModel.insertMany(products)
//   })

//   beforeEach(() => {
//     adapter = new ProductMDBAdapter(ProductModel)
//   })

//   afterAll(async () => {
//     await ProductModel.deleteMany({})
//   })

//   describe('getAll', () => {
//     it('should return all products', async () => {
//       const result = await adapter.getAll()
//       expect(result).toHaveLength(products.length)
//     })
//   })

//   describe('getById', () => {
//     it('should return a product by ID', async () => {
//       const product = products[0]
//       const result = await adapter.getById(product.id)
//       expect(result).toBeDefined()
//       expect(result?.name).toBe(product.name)
//     })

//     it('should return undefined for non-existent ID', async () => {
//       const result = await adapter.getById('non-existent-id')
//       expect(result).toBeUndefined()
//     })

//     it('should return a product with updated properties', async () => {
//       const product = products[0]
//       const updates = { name: 'Updated Product' }
//       const result = await adapter.getByIdAndUpdate(product.id, updates)
//       expect(result).toBeDefined()
//       expect(result?.name).toBe(updates.name)
//     })
//   })

//   describe('create', () => {
//     it('should create a new product', async () => {
//       const newProduct = {
//         name: 'New Product',
//         price: 9.99,
//         description: 'A new product'
//       }
//       await adapter.create(newProduct)
//       const result = await adapter.getById(newProduct.id)
//       expect(result).toBeDefined()
//       expect(result?.name).toBe(newProduct.name)
//     })
//   })

//   describe('createMany', () => {
//     it('should create multiple new products', async () => {
//       const newProducts = [
//         {
//           name: 'New Product 1',
//           price: 9.99,
//           description: 'A new product'
//         },
//         {
//           name: 'New Product 2',
//           price: 19.99,
//           description: 'Another new product'
//         }
//       ]
//       await adapter.createMany(newProducts)
//       const result = await adapter.getAll()
//       expect(result).toHaveLength(products.length + newProducts.length)
//     })
//   })

//   describe('update', () => {
//     it('should update an existing product', async () => {
//       const product = products[0]
//       const updates = { name: 'Updated Product' }
//       await adapter.update({ ...product, ...updates })
//       const result = await adapter.getById(product.id)
//       expect(result).toBeDefined()
//       expect(result?.name).toBe(updates.name)
//     })
//   })

//   describe('delete', () => {
//     it('should delete an existing product by ID', async () => {
//       const product = products[0]
//       await adapter.delete(product.id)
//       const result = await adapter.getById(product.id)
//       expect(result).toBeUndefined()
//     })

//     it('should delete an existing product by entity', async () => {
//       const product = products[0]
//       await adapter.delete(product)
//       const result = await adapter.getById(product.id)
//       expect(result).toBeUndefined()
//     })
//   })
// })
