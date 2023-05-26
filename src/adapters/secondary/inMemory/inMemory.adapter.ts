import { Entity } from '../../../core/entities/entity'
import { Gateway } from '../../../core/gateways/entity.gateway'

export class InMemoryAdapter<T extends Entity> implements Gateway<T> {
  private entities: T[] = []

  async listAll(): Promise<T[]> {
    return this.entities
  }

  async getById(id: string): Promise<T | undefined> {
    return this.entities.find((entity) => entity.id === id)
  }

  async create(entity: T): Promise<void> {
    this.entities.push(entity)
  }

  async update(entity: T): Promise<void> {
    const index = this.entities.findIndex((e) => e.id === entity.id)
    if (index !== -1) {
      this.entities[index] = entity
    }
  }

  async delete(id: string): Promise<void> {
    const index = this.entities.findIndex((entity) => entity.id === id)
    if (index !== -1) {
      this.entities.splice(index, 1)
    }
  }
}
