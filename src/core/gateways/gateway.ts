import { Entity } from '../entities/entity'

export interface Gateway<T extends Entity> {
  findAll(): Promise<T[]>
  findById(id: string): Promise<T | undefined>
  create(entity: T): Promise<void>
  createMany(entities: T[]): Promise<void>
  update(entity: T): Promise<void>
  delete(id: string): Promise<void>
}
