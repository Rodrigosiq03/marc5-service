import express from 'express'
import cors from 'cors'
import ServerlessHttp from 'serverless-http'
import { envs } from './helpers/envs'
import { healthRouter } from './routers/health_router'

const app = express()

app.use(express.json())
app.use(cors())
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

// module.exports.handler = ServerlessHttp(app)

