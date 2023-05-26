import { Entity } from '../../core/entities/entity'

export const InMemoryAdapter = () => {
  const entities: Entity[] = []

  return {
    async getAll(): Promise<Entity[]> {
      return entities
    },
    async getById(id: string): Promise<Entity | undefined> {
      return entities.find((entity) => entity.id === id)
    },
  }

  // async create(entity: T): Promise<void> {
  //   this.entities.push(entity)
  // }

  // async createMany(entities: T[]): Promise<void> {
  //   this.entities.push(...entities)
  // }

  // async update(entity: T): Promise<void> {
  //   const index = this.entities.findIndex((e) => e.id === entity.id)
  //   if (index !== -1) {
  //     this.entities[index] = entity
  //   }
  // }

  // async delete(id: string): Promise<void> {
  //   const index = this.entities.findIndex((entity) => entity.id === id)
  //   if (index !== -1) {
  //     this.entities.splice(index, 1)
  //   }
}
