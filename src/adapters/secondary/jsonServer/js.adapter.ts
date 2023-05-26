import Axios from 'axios'
import { Entity } from '../../../core/entities/entity'
import { Gateway } from '../../../core/gateways/gateway'

const axios = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
})

export class JSAdapter<T extends Entity> implements Gateway<T> {
  constructor(private readonly resource: string) {}

  async findAll(): Promise<T[]> {
    const res = await axios.get<T[]>(`/${this.resource}`)
    const entities = await res.data
    return entities
  }

  async findById(id: string): Promise<T | undefined> {
    const res = await axios.get<T>(`/${this.resource}/${id}`)
    const entity = await res.data
    return entity
  }

  async create(entity: T): Promise<void> {
    await axios.post(`/${this.resource}`, entity)
  }

  async createMany(entities: T[]): Promise<void> {
    await axios.post(`/${this.resource}`, entities)
  }

  async update(entity: T): Promise<void> {
    await axios.put(`/${this.resource}/${entity.id}`, entity)
  }

  async delete(id: string): Promise<void> {
    await axios.delete(`/${this.resource}/${id}`)
  }
}
