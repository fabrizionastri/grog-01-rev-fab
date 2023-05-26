import express, { Express, Request, Response } from 'express'
import { JSAdapter } from '../../secondary/jsonServer/js.adapter'

const expressPort = 3001
const expressUrl = `http://localhost:${expressPort}`
const app: Express = express()

const productAdapter = new JSAdapter('products')

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
  res.send(`⚡️Server is running at ${expressUrl}`)
})

app.get('/products', async (_req: Request, res: Response) => {
  const products = await productAdapter.getAll()
  res.send(JSON.stringify(products))
  // res.send('⚡️products')
})

app.get('/products/:id', async (req: Request, res: Response) => {
  const product = await productAdapter.getById(req.params.id)
  res.send(JSON.stringify(product))
  // res.send('⚡️products')
})

app.listen(expressPort, () => {
  console.log(`⚡️Server is running at ${expressUrl}`)
})
