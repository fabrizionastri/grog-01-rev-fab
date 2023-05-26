import { InMemoryAdapter } from './inMemory.adapter'

describe('InMemoryAdapter', () => {
  let adapter: any

  beforeEach(() => {
    adapter = InMemoryAdapter()
  })
  describe('check function', () => {
    it('should be defined', () => {
      expect(adapter).toBeDefined()
    })
    it('getAll should be defined', () => {
      expect(adapter.getAll).toBeDefined()
    })
    it('getById should be defined', () => {
      expect(adapter.getAll).toBeDefined()
    })
  })
})
