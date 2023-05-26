import express from 'express'
import { listAllProducts } from '../../../core/usecases/listAllProducts'
import { Express, Request, Response } from 'express'
import { getProductById } from '../../../core/usecases/getProductById'

const expressPort = 3001
const expressUrl = `http://localhost:${expressPort}`
const app: Express = express()

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.send('⚡️Server ')
})

app.get('/products', async (_req: Request, res: Response) => {
  const products = await listAllProducts(jsonServerProductAdapterFunction())
  res.send(JSON.stringify(products))
  // res.send('⚡️products')
})

app.get('/products/:id', async (req: Request, res: Response) => {
  const product = await getProductById(
    req.params.id,
    jsonServerProductAdapterFunction()
  )
  res.send(JSON.stringify(product))
  // res.send('⚡️products')
})

app.listen(expressPort, () => {
  console.log(`⚡️Server is running at ${expressUrl}`)
})
