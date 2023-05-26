import { Entity } from '../entities/entity'

export interface Gateway<T extends Entity> {
  listAll(): Promise<T[]>
  getById(id: string): Promise<T | undefined>
  create(entity: T): Promise<void>
  update(entity: T): Promise<void>
  delete(id: string): Promise<void>
}
