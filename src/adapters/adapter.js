const plop = (message) => (message2) => ({
  getAll() {
    return `${message} ${message2} getAll`
  },
  getById(id) {
    return `${message} ${message2} getById ${id}`
  },
  create(entity) {
    return `${message} ${message2} create ${entity}`
  },
  createMany(entities) {
    return `${message} ${message2} createMany ${entities}`
  },
  update(entity) {
    return `${message} ${message2} update ${entity}`
  },
  delete(id) {
    return `${message} ${message2} delete ${id}`
  },
})

const plip = plop('plip')

const plap = plip('plap')

console.log(plap.getById('prout'))

const adapter = (store) => (entity) => ({
  getAll() {
    return `${store} ${entity} getAll`
  },
  getById(id) {
    return `${store} ${entity} getById ${id}`
  },
  create(entity) {
    return `${store} ${entity} create ${entity}`
  },
  createMany(entities) {
    return `${store} ${entity} createMany ${entities}`
  },
  update(entity) {
    return `${store} ${entity} update ${entity}`
  },
  delete(id) {
    return `${store} ${entity} delete ${id}`
  },
})

const jsAdapter = adapter('JS')

const productAdapter = jsAdapter('Product')

console.log(productAdapter.getById('123'))
