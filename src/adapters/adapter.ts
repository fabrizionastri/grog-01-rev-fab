import { Adapter } from './adapter'
import { Entity } from '../core/entities/entity'

export interface Adapter<T extends Entity> {
  getAll(): Promise<T[]>
  getById(id: string): Promise<T | undefined>
  create(entity: T): Promise<void>
  createMany(entities: T[]): Promise<void>
  update(entity: T): Promise<void>
  delete(id: string): Promise<void>
}
